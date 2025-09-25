const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/avis', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3004, () => {
  console.log('Service Avis en cours d\'exécution sur le port 3004');
});
