const mongoose = require('mongoose');

//Falta agregar doctor y paciente, diagnostico y tratamiento
//Falta buscar como agregar las fotos (estudios diagnosticos)
const pacienteSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    motivoConsulta: String,
    evolucion: String, 
    exploracionFisica: {
        altura: Number,
        peso: Number,
        imc: Number,
        observacion: String
    },
    estudiosDiagnosticos: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})
const Paciente =  mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente