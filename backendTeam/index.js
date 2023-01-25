'use strict';
const express = require('express');
const ngrok = require('ngrok');

const app = express();
const port = process.env.PORT || 3900;
const Score = require('./src/models/score');
app.use('/alexa', require('./routes/alexaRoute'));
// solicitudes
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const cors = require('cors');


// URL de conexión a la base de datos, incluyendo las credenciales de autenticación
let url = 'mongodb+srv://wikispain:Melon123@score.mwxiah9.mongodb.net/?retryWrites=true&w=majority';

// Evita fallos en la conexión
mongoose.Promise = global.Promise;


// Cargamos body-parser, es un middleware para analizar cuerpos a través de la URL
app.use(bodyParser.urlencoded({ extended: false }));
//convertir cualquierp petición al tipo JSON
app.use(bodyParser.json());
// app.use(cors()({ origin: 'http://127.0.0.1:5173', methods: ['GET', 'POST', 'PUT'] }));
app.use(cors());
app.use(express.json());

// Establecemos la conexión a la base de datos
mongoose
	.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Conexión a la base de datos establecida exitosamente');
	})
	.catch((err) => {
		console.log('Error al conectar a la base de datos: ', err);
	});


// Iniciamos el servidor Express
app.listen(port, async () => {
	console.log(mongoose.connection.readyState);
	console.log(`Servidor Express escuchando en el puerto ${port}`);
	const url = await ngrok.connect(port);
	console.log(`ngrok enlace: ${url}`);
});

app.post('/api/score', (req, res) => {
	const newscore = new Score({
		idTeam1: req.body.idTeam1 || '',
		idTeam2: req.body.idTeam2 || '',
		sets: req.body.sets || [],
	});
	newscore.save((err, score) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(score);
	});
});
