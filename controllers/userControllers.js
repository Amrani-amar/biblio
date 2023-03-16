const User = require('../models/user');
const Livre = require('../models/livre');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Fonction pour créer un nouveau compte utilisateur



exports.signup = async (req, res, next) => {
  const { email, password,nom, prenom,age, adresse } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser =  await User.create({ email, password:hashedPassword, nom, prenom,age, adresse  });

    // await newUser.save();

    res.status(201).json({ message: 'Votre compte a été créé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de votre compte.',error });
  }
};

// Fonction pour se connecter avec un compte utilisateur existant

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'Aucun compte trouvé avec cet email.' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Mot de passe incorrect.',error });
    }
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(200).json({ result: existingUser ,token});
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion.',error });
  }
};




// Fonction pour récupérer tous les livres
exports.getLivre = async (req, res, next) => {
  try {
    const livre = await Livre.find();
    res.status(200).json(livre);
  } catch (error) {
    next(error);
  }
};

   //Emprunter 
   exports.Emprt = async (req, res) => {
    try {
    

  
    const emprunt = new Emprunt({ Client, Livre, DateSortie, DateRetour });
    const result = await emprunt.save();
    res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};


