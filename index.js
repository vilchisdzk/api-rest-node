// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');

// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;

// Cargamos el fichero app.js con la configuración de Express
var app = require('./app');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;

// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/mi_database_mongo')
        .then(() => {

                // Cuando se realiza la conexión, lanzamos este mensaje por consola
            console.log('La conexión a MongoDB se ha realizado correctamente!!');

                // CREAR EL SERVIDOR WEB CON NODEJS
            app.listen(port, () => {
                console.log('El servidor esta corriendo en localhost:3800');
            });
        })
        .catch(err => console.log(err));
        // Si no se conecta correctamente escupimos el error
