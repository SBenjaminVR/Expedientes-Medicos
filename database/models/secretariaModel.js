const mongoose = require('mongoose');

//Falta hacerle hash a la contraseña y añadir ID del doctor
const secretariaSchema = new mongoose.Schema({
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
const Secretaria =  mongoose.model('Secretaria', secretariaSchema);

module.exports = Secretaria