'use strict'

// Cargamos el módulo de mongoose
var mongoose = require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y tendrá dos campos de tipo String
var NotaSchema = Schema({
    nombre: String,
    contenido: String
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Nota', NotaSchema);
