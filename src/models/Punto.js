 const { Schema, model } = require("mongoose")
 const puntoSchema = new Schema({
     id: Number,
     orden: Number,
     descripcionDeObjeto: String,
     descripcionDeCiego: String,
     descripcionDeProblema: String,
     descripcionDeHistoria: String,

 })

 module.exports = model("Punto", puntoSchema)