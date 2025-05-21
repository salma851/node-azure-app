const http = require('http');

const server = http.createServer((req, res) => {
  res.end(' Déploiement CI/CD réussi avec Azure et Docker Hub !');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
