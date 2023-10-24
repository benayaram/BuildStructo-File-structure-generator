//create Strecture js
const fs = require('fs');

function createStructure(basePath, structure) {
  for (const item of structure) {
    const itemPath = basePath + '/' + item.name;

    if (item.type === 'directory') {
      fs.mkdirSync(itemPath, { recursive: true });
      if (item.children) {
        createStructure(itemPath, item.children);
      }
    } else if (item.type === 'file') {
      if (item.content) {
        fs.writeFileSync(itemPath, item.content);
      } else {
        fs.writeFileSync(itemPath, '');
      }
    }
  }
}

// Load the structure from a JSON file (Structure.js)
const structure = require('./Structure');

// Specify the base directory where the structure will be created
const baseDirectory = '../output';

// Create the file structure using the loaded structure
createStructure(baseDirectory, [structure]);

console.log('File structure created successfully.');