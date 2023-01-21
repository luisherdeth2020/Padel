'use strict';

const express = require('express');
// solicitudes
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const port = 3900;
const cors = require('cors');

// conectar a MongoDB (Base de datos)
let url = 'mongodb://localhost:27017/api_rest_reactscore';

// Evita fallos en la conexión
mongoose.Promise = global.Promise;

let score_routes = require('./routes/score');
// const score = require('./models/score');

// Cargamos body-parser, es un middleware para analizar cuerpos a través de la URL
app.use(bodyParser.urlencoded({ extended: false }));
//convertir cualquierp petición al tipo JSON
app.use(bodyParser.json());
app.use(cors({ origin: 'http://127.0.0.1:5173', methods: ['GET', 'POST', 'PUT'] }));
// Activamos el CORS para permitir las peticiones AJAX y HTTP desde el Frontend
// cors es para proteger qué otras páginas no autorizados soliciten datos a tu backend
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Authorization,X-API-KEY, Origin, X-Requested-With, Content-type,Accept,Access-Control-Allow-Request-Method'
	);
	res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELE');
	res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
	next();
});
//PUT(modificar)

app.use('/api', score_routes);

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
	console.log('Conexión con éxito a la bbdd');
	app.listen(port, () => {
		console.log('Lanzando la aplicación en el puerto ' + port);
	});
});

// app.listen(port, () => {
// 	console.log('hey ' + port);
// });
