const mongoose =require ('mongoose');

const Schema = mongoose.Schema;


const categorieSchema = new Schema({
    categ:{
        type:String,
        required:true
    },
    
    genre:{
        type:String,
        required:true
    },

});
module.exports = mongoose.model('Categorie', categorieSchema);