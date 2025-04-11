import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = __dirname;

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Erreur lors de la lecture du dossier:', err);
  }

  console.log(' Fichiers dans le dossier :');
  files.forEach(file => {
    console.log('🔹', file);
  });
});
