const mongoose = require('mongoose');

//Falta hacerle hash a la contraseña
const diagnosticoSchema = new mongoose.Schema({
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
const Diagnostico =  mongoose.model('Diagnostico', diagnosticoSchema);

module.exports = Diagnostico