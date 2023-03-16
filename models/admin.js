
const mongoose = require('mongoose');
const adminRoutes = require('../Routes/adminRoutes');

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

// Fonctionnalités CRUD pour les employés
adminSchema.methods.createEmployee = function (employeeData) {
  // créer un nouvel employé
};

adminSchema.methods.updateEmployee = function (employeeId, employeeData) {
  // mettre à jour un employé
};

adminSchema.methods.deleteEmployee = function (employeeId) {
  // supprimer un employé
};

adminSchema.methods.getEmployees = function () {
  // obtenir tous les employés
};

// Statistiques des emprunts
adminSchema.methods.getLoanStats = function () {
  // obtenir les statistiques des emprunts
};

 const Admin = mongoose.model("admin", adminSchema);




 



