const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/images/uhp";
const outputDir = "public/images/uhp";

// Mapeo de archivos originales a nombres descriptivos
const fileMapping = {
  "WhatsApp Image 2026-02-25 at 5.26.37 PM.jpeg":
    "componentes-uhp-bomba-intensificadora-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM.jpeg":
    "sellos-alta-presion-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM (1).jpeg":
    "cartuchos-presion-succion-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM (2).jpeg":
    "tubos-enfoque-orificios-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM (3).jpeg":
    "valvulas-cabezal-uhp-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM (4).jpeg":
    "consumibles-waterjet-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM (5).jpeg":
    "refacciones-uhp-industriales-1.jpg",
  "WhatsApp Image 2026-02-25 at 5.26.39 PM (6).jpeg":
    "componentes-hidraulicos-uhp-1.jpg",
};

async function optimizeImages() {
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  console.log(
    "🔄 Optimizando y renombrando imágenes de Componentes UHP...\n",
  );

  for (const [originalName, newName] of Object.entries(fileMapping)) {
    const inputPath = path.join(inputDir, originalName);
    const outputPath = path.join(outputDir, newName);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  No se encontró: ${originalName}`);
      continue;
    }

    try {
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;

      await sharp(inputPath)
        .resize(1920, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true,
        })
        .toFile(outputPath);

      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;

      const reduction = (
        (1 - optimizedStats.size / originalStats.size) *
        100
      ).toFixed(2);

      console.log(`✅ ${originalName}`);
      console.log(`   → ${newName}`);
      console.log(
        `   📦 ${(originalStats.size / 1024).toFixed(2)}KB → ${(optimizedStats.size / 1024).toFixed(2)}KB (${reduction}% reducción)\n`,
      );

      // Eliminar archivo original si tiene nombre diferente
      if (originalName !== newName) {
        fs.unlinkSync(inputPath);
      }
    } catch (error) {
      console.error(`❌ Error procesando ${originalName}:`, error.message);
    }
  }

  const totalReduction = (
    (1 - totalOptimizedSize / totalOriginalSize) *
    100
  ).toFixed(2);
  console.log(`\n📊 RESUMEN:`);
  console.log(`   Total original: ${(totalOriginalSize / 1024).toFixed(2)}KB`);
  console.log(
    `   Total optimizado: ${(totalOptimizedSize / 1024).toFixed(2)}KB`,
  );
  console.log(`   Reducción total: ${totalReduction}%`);

  // Now convert all optimized JPGs to WebP
  console.log("\n🔄 Convirtiendo a WebP...\n");

  for (const newName of Object.values(fileMapping)) {
    const jpgPath = path.join(outputDir, newName);
    const webpPath = jpgPath.replace(/\.jpg$/, ".webp");

    if (!fs.existsSync(jpgPath)) continue;

    try {
      await sharp(jpgPath).webp({ quality: 80 }).toFile(webpPath);

      const jpgSize = fs.statSync(jpgPath).size;
      const webpSize = fs.statSync(webpPath).size;
      const savings = ((1 - webpSize / jpgSize) * 100).toFixed(1);

      console.log(
        `  ✓ ${path.basename(jpgPath)} → ${path.basename(webpPath)} (${(jpgSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB, -${savings}%)`,
      );
    } catch (err) {
      console.error(`  ✗ Error: ${jpgPath}: ${err.message}`);
    }
  }
}

optimizeImages().catch(console.error);
