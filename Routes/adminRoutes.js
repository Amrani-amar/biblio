
const express = require('express')
const controller = require('../controllers/adminControllers')


const adminRoutes = express.Router();

adminRoutes.post("/creerEmploye",controller.createEmploye);
adminRoutes.get("/affichEmploye",controller.getEmploye);
adminRoutes.put("/updateEmploye/:id",controller.updateEmploye);
adminRoutes.delete("/supriEmploye/:id", controller.deleteEmploye);


module.exports = adminRoutes;
