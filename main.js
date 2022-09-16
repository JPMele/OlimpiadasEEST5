const express = require("express");
const mongoose = require("mongoose");
const { response } = require("express");
var handlebars = require('handlebars');
var exphbs = require('express-handlebars');
require('dotenv').config({path:'./.env'});

var app = express();

const port = process.env.PORT;

const Puntos = require("./Puntos");
const Comentarios = require("./Comentarios");


mongoose.connect(process.env.URI, function(error) {
    if(error){
        console.log(error);
        return;
    }
    console.log("Conectado a la base de datos");
});

app.post('/guardar', function(req, res) { 
    console.log("guardando");

    
});

app.listen(port, () => console.log('Server running on port ' + port));
