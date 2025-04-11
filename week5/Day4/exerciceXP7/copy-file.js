import fs from 'fs';

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Erreur de lecture :', err);
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      return console.error('Erreur d\'écriture :', err);
    }
    console.log(' Contenu copié avec succès dans destination.txt');
  });
});
