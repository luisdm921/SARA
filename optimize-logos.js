const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/images/logos_marcas";
const outputDir = "./public/images/logos_marcas_optimized";

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Obtener todos los archivos
const files = fs.readdirSync(inputDir).filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
});

console.log(`📦 Optimizando ${files.length} logos...\n`);

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

async function optimizeLogos() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = path.basename(file, path.extname(file)) + ".png";
    const outputPath = path.join(outputDir, outputName);

    try {
      // Obtener tamaño original
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;

      // Optimizar y convertir a PNG
      await sharp(inputPath)
        .resize(400, 250, {
          fit: "inside",
          withoutEnlargement: true,
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png({
          quality: 90,
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true,
        })
        .toFile(outputPath);

      // Obtener tamaño optimizado
      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;

      const reduction = (
        (1 - optimizedStats.size / originalStats.size) *
        100
      ).toFixed(2);
      console.log(`✅ ${file} → ${outputName}`);
      console.log(
        `   ${(originalStats.size / 1024).toFixed(2)}KB → ${(optimizedStats.size / 1024).toFixed(2)}KB (${reduction}% reducción)`,
      );
    } catch (error) {
      console.error(`❌ Error procesando ${file}:`, error.message);
    }
  }

  const totalReduction = (
    (1 - totalOptimizedSize / totalOriginalSize) *
    100
  ).toFixed(2);
  console.log(`\n📊 Resumen:`);
  console.log(`   Original: ${(totalOriginalSize / 1024).toFixed(2)}KB`);
  console.log(`   Optimizado: ${(totalOptimizedSize / 1024).toFixed(2)}KB`);
  console.log(`   ✨ Reducción total: ${totalReduction}%`);
}

optimizeLogos().catch(console.error);
