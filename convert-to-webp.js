const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public", "images");

// Directories to process
const dirs = [
  "machinery",
  "used-equipment",
  "welding-equipment",
  "mro-supplies",
  "uhp",
  "logos_marcas_optimized",
  ".", // root images
];

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  // Skip if webp already exists
  if (fs.existsSync(outputPath)) {
    return null;
  }

  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const metadata = await sharp(inputBuffer).metadata();

    let pipeline = sharp(inputBuffer);

    // For logos (PNG with transparency), keep alpha
    if (ext === ".png") {
      pipeline = pipeline.webp({ quality: 85, alphaQuality: 90 });
    } else {
      pipeline = pipeline.webp({ quality: 80 });
    }

    await pipeline.toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(
      `  ✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(inputSize / 1024).toFixed(1)}KB → ${(outputSize / 1024).toFixed(1)}KB, -${savings}%)`,
    );

    return { inputSize, outputSize };
  } catch (err) {
    console.error(`  ✗ Error: ${inputPath}: ${err.message}`);
    return null;
  }
}

async function processDirectory(dirPath) {
  const fullPath = path.join(publicDir, dirPath);
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath);
  const results = [];

  for (const file of files) {
    const filePath = path.join(fullPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      const result = await convertToWebP(filePath);
      if (result) results.push(result);
    }
  }

  return results;
}

async function main() {
  console.log("=== Converting images to WebP ===\n");

  let totalInput = 0;
  let totalOutput = 0;
  let fileCount = 0;

  for (const dir of dirs) {
    console.log(`\nProcessing: ${dir === "." ? "root" : dir}/`);
    const results = await processDirectory(dir);
    for (const r of results) {
      totalInput += r.inputSize;
      totalOutput += r.outputSize;
      fileCount++;
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Files converted: ${fileCount}`);
  console.log(`Original total: ${(totalInput / 1024).toFixed(1)} KB`);
  console.log(`WebP total: ${(totalOutput / 1024).toFixed(1)} KB`);
  console.log(
    `Total savings: ${((1 - totalOutput / totalInput) * 100).toFixed(1)}%`,
  );
}

main().catch(console.error);
