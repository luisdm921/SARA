const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/images/used-equipment";
const outputDir = "public/images/used-equipment";

// Mapeo de archivos originales a nombres descriptivos
const fileMapping = {
  "WhatsApp Image 2026-02-14 at 3.40.44 PM.jpeg": "torno-seminuevo-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.44 PM (1).jpeg":
    "fresadora-seminueva-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.44 PM (2).jpeg":
    "rectificadora-seminueva-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.44 PM (3).jpeg": "torno-seminuevo-2.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.45 PM.jpeg":
    "prensa-hidraulica-seminueva-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.45 PM (1).jpeg":
    "dobladora-seminueva-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.45 PM (2).jpeg":
    "cortadora-seminueva-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.40.45 PM (3).jpeg":
    "taladro-columna-seminuevo-1.jpg",
};

async function optimizeImages() {
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  console.log("🔄 Optimizando y renombrando imágenes de equipo seminuevo...\n");

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
}

optimizeImages().catch(console.error);
