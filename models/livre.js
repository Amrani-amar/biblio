const mongoose =require ('mongoose');

const Schema = mongoose.Schema;


const livreSchema = new Schema({
    categorie:{
        type:String,
        required:true
    },
    titre:{
        type:String,
        required:true
    },

    auteur:{
        type:String,
        required:true
    },

    note:{
        type:String,
        required:true
    },

    nombreEmpreint:{
        type:Number,
        default:0
    },

    nombreCopie:{
        type:Number,
        default:1
    },

    
    nombreCopiedispo:{
        type:Number,
        default:function (){
            return this.nombreCopie;
        }
    },

});
module.exports = mongoose.model('Livre', livreSchema);


