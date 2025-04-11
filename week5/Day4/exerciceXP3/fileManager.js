const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data;
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${filePath} :`, error.message);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(` Contenu écrit dans ${filePath}`);
  } catch (error) {
    console.error(`Erreur lors de l'écriture dans le fichier ${filePath} :`, error.message);
  }
}

module.exports = {
  readFile,
  writeFile
};
