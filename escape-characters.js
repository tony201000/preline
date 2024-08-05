const fs = require('fs');
const path = require('path');

const escapeCharacters = (content) => {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

const escapeFiles = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      escapeFiles(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      content = escapeCharacters(content);
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  });
};

escapeFiles('./app'); // Change this to your directory if necessary
escapeFiles('./components');
