const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

const inputFolder = `${__dirname}/input`;
const outputFolder = `${__dirname}/output`;

async function processImages() {
  try {
    await fs.ensureDir(outputFolder);

    const files = (await fs.readdir(inputFolder)).filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );

    for (let i = 0; i < files.length; i++) {
      const inputPath = path.join(inputFolder, files[i]);
      // Replace the original extension with .webp
      const outputFilename = `product-${path.basename(
        files[i],
        path.extname(files[i])
      )}.webp`;
      const outputPath = path.join(outputFolder, outputFilename);

      await sharp(inputPath)
        .resize(900, 900, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .webp({ quality: 80 })
        .toFile(outputPath);
    }

    console.log(
      "All images processed, converted to webp, and renamed successfully."
    );
  } catch (error) {
    console.error("Error processing images:", error);
  }
}
processImages();
