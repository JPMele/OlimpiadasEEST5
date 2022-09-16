const mongoose = require("mongoose")

const comentarioSchema = new mongoose.Schema({
    id: Number,
    comentario: String,
    fecha: Date,
    calificacion: Number
})

module.exports = mongoose.model("Comentario", comentarioSchema)