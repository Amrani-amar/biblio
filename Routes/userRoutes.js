


const express = require('express');
const userController = require('../controllers/userControllers');
const livre = require('../models/livre');

const userRoutes = express.Router();
// const auth = require('../middleware/auth');

userRoutes.post('/signup', userController.signup);
userRoutes.post('/login', userController.login);

// consultation de livre 
userRoutes.get('/affichLivre', userController.getLivre);


module.exports = userRoutes;

