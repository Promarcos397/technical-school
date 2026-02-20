
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = './images';

async function convertImages() {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(directory, file);
            const outputPath = path.join(directory, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            console.log(`Converting ${file} to MAX QUALITY WebP...`);

            // Quality 100, Lossless attempt for max sharpness
            await sharp(inputPath)
                .webp({ quality: 100, effort: 6, lossless: true })
                .toFile(outputPath);

            console.log(`Saved to ${outputPath}`);
        }
    }
}

convertImages().catch(err => console.error(err));
