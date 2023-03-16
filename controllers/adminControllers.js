

const Admin = require('../models/admin');

const Employe = require("../models/employe");

// Récupérer tous les employés
exports.getEmploye = async (req, res, next) => {
  try {
    const employes = await Employe.find();
    res.status(200).json(employes);
  } catch (error) {
    next(error);
  }
};

// Récupérer un employé par  ID
exports.getEmployeById = async (req, res, next) => {
  try {
    const employe = await Employe.findById(req.params.id);
    if (!employe) {
      const error = new Error("Employé introuvable");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(employe);
  } catch (error) {
    next(error);
  }
};

// Créer un employé
exports.createEmploye = async (req, res, next) => {
  try {
    const { nom, prenom, poste } = req.body;
    const employe = new Employe({
      nom,
      prenom,
      poste,
    });
    const result = await employe.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un employé
exports.updateEmploye = async (req, res, next) => {
  try {
    const { nom, prenom, poste } = req.body;
    const employe = await Employe.findById(req.params.id);
    if (!employe) {
      const error = new Error("Employé introuvable");
      error.statusCode = 404;
      throw error;
    }
    employe.nom = nom || employe.nom;
    employe.prenom = prenom || employe.prenom;
    employe.poste = poste || employe.poste;
    const result = await employe.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Supprimer un employé
exports.deleteEmploye = async (req, res, next) => {
  try {
    const employe = await Employe.findById(req.params.id);
    if (!employe) {
      const error = new Error("Employé introuvable");
      error.statusCode = 404;
      throw error;
    }
    await employe.remove();
    res.status(200).json({ message: "Employé supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};
