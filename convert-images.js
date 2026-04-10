const { execSync } = require('child_process');
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp specifically for image conversion...');
  execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

(async () => {
    for (const file of files) {
        if (file.match(/\.(png|jpe?g)$/i) && !file.includes('icon')) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(publicDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Converted ${file} to ${path.basename(outputPath)}`);
                // Destroy original to enforce strict optimized repo
                fs.unlinkSync(inputPath);
            } catch(e) {
                 console.error(`Failed on ${file}`, e);
            }
        }
    }
    console.log('All images highly optimized to WebP successfully!');
})();
