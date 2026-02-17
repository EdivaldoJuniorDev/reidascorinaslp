
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/img');
const OUTPUT_DIR = path.join(__dirname, '../public/img'); // Overwrite or same dir

async function optimizeImages(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await optimizeImages(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const baseName = path.basename(file, ext);
      
      console.log(`Optimizing: ${file}`);

      // Convert to WebP
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(path.join(directory, `${baseName}.webp`));

      // Convert to AVIF (smaller but slower to encode)
      await sharp(fullPath)
        .avif({ quality: 65 })
        .toFile(path.join(directory, `${baseName}.avif`));
        
      console.log(`✓ Processed ${baseName}`);
    }
  }
}

optimizeImages(INPUT_DIR).then(() => {
  console.log('--- All images optimized! ---');
}).catch(err => {
  console.error('Error optimizing images:', err);
});
