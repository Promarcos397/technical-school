
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = './images';

async function checkRatios() {
    const files = fs.readdirSync(directory).filter(f => f.endsWith('.webp'));
    console.log('Checking image dimensions...');

    for (const file of files) {
        const inputPath = path.join(directory, file);
        const metadata = await sharp(inputPath).metadata();

        const { width, height } = metadata;
        const ratio = width / height;
        let type = 'Square';
        if (ratio > 1.2) type = 'Landscape';
        if (ratio < 0.8) type = 'Portrait';

        console.log(`${file}: ${width}x${height} (${type}) - Ratio: ${ratio.toFixed(2)}`);
    }
}

checkRatios().catch(err => console.error(err));
