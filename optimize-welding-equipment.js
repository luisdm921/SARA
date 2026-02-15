const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/images/welding-equipment";
const outputDir = "public/images/welding-equipment";

// Mapeo de archivos originales a nombres descriptivos
const fileMapping = {
  "WhatsApp Image 2026-02-14 at 3.42.28 PM.jpeg": "soldadora-mig-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.28 PM (1).jpeg": "soldadora-tig-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.28 PM (2).jpeg": "soldadora-arco-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.28 PM (3).jpeg":
    "soldadora-inverter-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.28 PM (4).jpeg": "plasma-cutter-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.29 PM.jpeg":
    "soldadora-multiproceso-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.29 PM (1).jpeg": "soldadora-mig-2.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.29 PM (2).jpeg": "soldadora-tig-2.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.29 PM (3).jpeg": "soldadora-orbital-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.29 PM (4).jpeg":
    "soldadora-resistencia-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.29 PM (5).jpeg":
    "generador-soldadura-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.30 PM.jpeg": "soldadora-laser-1.jpg",
  "WhatsApp Image 2026-02-14 at 3.42.30 PM (1).jpeg":
    "extractor-humos-soldadura-1.jpg",
};

async function optimizeImages() {
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  console.log(
    "🔄 Optimizando y renombrando imágenes de equipos de soldadura...\n",
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
}

optimizeImages().catch(console.error);
