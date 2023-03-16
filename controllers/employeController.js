
const categorie = require('../models/categorie');
const Employe = require('../models/employe');
const livre = require('../models/livre');


const User = require("../models/user");

// Créer une categorie
exports.createCategorie = async (req, res, next) => {
  try {
    const { categ, genre } = req.body;
    const categorie = new Categorie({
      categ,
      genre,
    });
    const result = await Categorie.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// afficher toutes les categorie
exports.getCategorie = async (req, res, next) => {
  try {
    const user = await categorie.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
// Mettre à jour une categorie
exports.updateCategorie = async (req, res, next) => {
  try {
    const { categ, genre,age, adresse } = req.body;
    const categorie = await Categorie.findById(req.params.id);
    if (!categorie) {
      const error = new Error("User introuvable");
      error.statusCode = 404;
      throw error;
    }
    categorie.categ = categ || categorie.categ;
    categorie.genre = genre || categorie.genre;
  
    const result = await categorie.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
// Supprimer une categorie 
exports.deleteCategorie = async (req, res, next) => {
  try {
    const livre = await categorie.findById(req.params.id);
    if (!Categorie) {
      const error = new Error("categorie introuvable");
      error.statusCode = 404;
      throw error;
    }
    await categorie.remove();
    res.status(200).json({ message: "categorie supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};





// afficher tout les livres
exports.getLivre = async (req, res, next) => {
  try {
    const user = await livre.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Créer ou ajouter un nouveau livre
exports.createLivre = async (req, res, next) => {
  try {
    const { titre, auteur, note } = req.body;
    const user = new livre({
      titre,
      auteur,
      note,
    });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Supprimer un livre
exports.deleteLivre = async (req, res, next) => {
  try {
    const livre = await livre.findById(req.params.id);
    if (!livre) {
      const error = new Error("livre introuvable");
      error.statusCode = 404;
      throw error;
    }
    await livre.remove();
    res.status(200).json({ message: "LIVRE supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};



// Créer un utilisateur
exports.createUser = async (req, res, next) => {
  try {
    const { nom, prenom,age, adresse } = req.body;
    const user = new User({
      nom,
      prenom,
      age,
      adresse,
    });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};


// Mettre à jour un utilisateur
exports.updateUser = async (req, res, next) => {
  try {
    const { nom, prenom,age, adresse } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      const error = new Error("User introuvable");
      error.statusCode = 404;
      throw error;
    }
    user.nom = nom || user.nom;
    user.prenom = prenom || user.prenom;
    user.age = age || user.age;
    user.adresse = adresse || user.adresse;
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
// Récupérer tous les utilisateurs
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
// Récupérer un utilisateur par ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const error = new Error("User introuvable");
      error.statusCode = 404;
      throw error;
    }
    
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};


// Supprimer un utilisateur
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const error = new Error("User introuvable");
      error.statusCode = 404;
      throw error;
    }
    await user.remove();
    res.status(200).json({ message: "User supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};





