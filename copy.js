const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'soham-portrait.jpg');
const dest = path.join(__dirname, 'public', 'soham-portrait.webp');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully duplicated portrait asset to soham-portrait.webp to prevent 404!');
  } else {
    console.error('Error: Source image not found at', src);
  }
} catch (err) {
  console.error('Error during image duplication:', err.message);
}
