const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/paiements', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3003, () => {
  console.log('Service Paiement en cours d\'exécution sur le port 3003');
});
