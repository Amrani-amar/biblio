const express = require('express');
const controller = require('../controllers/employeController');

const employeRoutes = express.Router();
         // gerer les categorie
employeRoutes.post('/creerCategorie', controller.createCategorie);
employeRoutes.get('/affichCategorie', controller.getCategorie);
employeRoutes.put('/updateCategorie/:id', controller.updateCategorie);
employeRoutes.delete('/supriCategorie/:id', controller.deleteCategorie);

        // gerer les livre
employeRoutes.get('/affichLivre', controller.getLivre);
employeRoutes.post('/creerLivre', controller.createLivre);
employeRoutes.delete('/supriLivre/:id', controller.deleteLivre);


        //  CRUD SUR Le user 
employeRoutes.post('/creerUser', controller.createUser);
employeRoutes.get('/affichUser', controller.getUser);
employeRoutes.put('/updateUser/:id', controller.updateUser);
employeRoutes.delete('/supriUser/:id', controller.deleteUser);




module.exports = employeRoutes;
