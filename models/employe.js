const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  poste: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('Employe', employeSchema);

