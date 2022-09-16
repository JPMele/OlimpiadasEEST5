const mongoose = require("mongoose")

const puntoSchema = new mongoose.Schema({
    id: Number,
    orden: Number,
    descripcionDeObjeto: String,
    descripcionDeCiego: String,
    descripcionDeProblema: String,
    descripcionDeHistoria: String,

})

module.exports = mongoose.model("Punto", puntoSchema)