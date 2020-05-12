const mongoose = require('mongoose');

//Falta hacerle hash a la contraseña
const tratamientoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})
const Tratamiento =  mongoose.model('Tratamiento', tratamientoSchema);

module.exports = Tratamiento