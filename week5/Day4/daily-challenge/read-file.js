import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(' Error reading file:', err);
    } else {
      console.log(' File content:\n', data);
    }
  });
}
