const mongoose = require('mongoose');

//Falta hacerle hash a la contraseña
const doctorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})
const Doctor =  mongoose.model('Doctor', doctorSchema);

module.exports = Doctor