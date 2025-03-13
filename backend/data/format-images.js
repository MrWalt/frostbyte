const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

const inputFolder = `${__dirname}/input`;
const outputFolder = `${__dirname}/output`;

async function processImages() {
  try {
    await fs.ensureDir(outputFolder);

    const files = (await fs.readdir(inputFolder)).filter((file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    for (let i = 0; i < files.length; i++) {
      const inputPath = path.join(inputFolder, files[i]);
      const outputFilename = `product-${files[i]}`;
      const outputPath = path.join(outputFolder, outputFilename);

      await sharp(inputPath)
        .resize(900, 900, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .toFile(outputPath);
    }

    console.log("All images processed and renamed successfully.");
  } catch (error) {
    console.error("Error processing images:", error);
  }
}
processImages();
