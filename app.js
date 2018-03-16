// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');

// Llamamos a express para poder crear el servidor
var app = express();

// Importamos las rutas
var nota_routes = require('./routes/nota');

// Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Aquí configuraremos el CORS posteriormente
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Cargamos las rutas
app.use('/api', nota_routes);

// Por ultimo exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;

// METODO DE PRUEBA
app.get('/mi-prueba', (req, res) => {
    return res.status(200).send({
       message: 'Método de prueba del API REST victorroblesweb.es'
    });
});


app.post('/mi-prueba-post', (req, res) => {
  console.log(req.body);
    return res.status(200).send({
       message: 'Método de prueba del API REST vilchis.es'
    });
});
