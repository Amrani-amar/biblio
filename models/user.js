

const mongoose =require ('mongoose');
const adminRoutes = require('../Routes/userRoutes');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },


    nom:{
        type: String,
        required: true,
    },

    prenom:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        require:true
    },

    adresse:{
        type:String,
        required:true,

    },
}
);

// userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);