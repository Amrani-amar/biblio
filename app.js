

// inclure la configuration dotenv pour charger les variables d'environnement depuis le fichier .env

require('dotenv').config(); 

// inclure le module express pour créer une application web
const express = require('express');

// inclure le module mongoose pour se connecter à la base de données MongoDB

const mongoose = require('mongoose');

// créer une instance de l'application express

const app = express();

// connexion à la base de données MongoDB en utilisant l'URL stockée dans la variable DB_URI dans le fichier .env

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// import desfichier  de routes
app.use('/admin',require('./Routes/adminRoutes'));
app.use('/user',require('./Routes/userRoutes'));
app.use('/employe',require('./Routes/employeRoutes'));




// démarrer le serveur en écoutant les connexions entrantes sur le port stocké dans la variable PORT dans le fichier .env
app.listen(process.env.PORT, () => {
  console.log(`Server au port d'alger ${process.env.PORT}`);
});

console.log("hello hello");

