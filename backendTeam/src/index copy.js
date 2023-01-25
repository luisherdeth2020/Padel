'use strict';
const express = require('express');
const ngrok = require('ngrok');

const app = express();
const port = process.env.PORT || 3900;
// solicitudes
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


const cors = require('cors');

// conectar a MongoDB (Base de datos)
// let url = 'mongodb://localhost:27017/api_rest_reactscore';

// URL de conexión a la base de datos, incluyendo las credenciales de autenticación
let url = 'mongodb+srv://wikispain:Melon123@score.mwxiah9.mongodb.net/?retryWrites=true&w=majority';

// Evita fallos en la conexión
mongoose.Promise = global.Promise;

let score_routes = require('./routes/score');
// const score = require('./models/score');

// Cargamos body-parser, es un middleware para analizar cuerpos a través de la URL
app.use(bodyParser.urlencoded({ extended: false }));
//convertir cualquierp petición al tipo JSON
app.use(bodyParser.json());
// app.use(cors()({ origin: 'http://127.0.0.1:5173', methods: ['GET', 'POST', 'PUT'] }));
app.use(cors());
app.use(express.json());
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

// app.use('/api', score_routes);

// mongoose.connect(url, { useNewUrlParser: true }).then(() => {
// 	console.log('Conexión con éxito a la bbdd');
// 	app.listen(port, () => {
// 		console.log('Lanzando la aplicación en el puerto ' + port);
// 	});
// });


// const mongoose = require('mongoose');


// Establecemos la conexión a la base de datos
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Aquí podrías definir tus rutas para manejar las solicitudes HTTP
// ...

// Iniciamos el servidor Express
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

const scoreSchema = new mongoose.Schema({
	idTeam1: String,
	idTeam2: String,
	sets: [
		{
			Aset1: Number,
			Aset2: Number,
			Bset1: Number,
			Bset2: Number,
			totalPoints: { team1: Number, team2: Number },
			finished: Boolean,
		},
	],
});

const score = mongoose.model('score', scoreSchema);

app.post('/api/score', (req, res) => {
	const newscore = new score(req.body);
	newscore.save((err, score) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(score);
	});
});

// exports.handler = async (event) => {
// 	// URL de conexión a la base de datos, incluyendo las credenciales de autenticación
// 	let url = 'mongodb+srv://wikispain:Melon123@score.mwxiah9.mongodb.net/?retryWrites=true&w=majority';
// 	// Establecemos la conexión a la base de datos
// 	await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// 	// Aquí podrías escribir el resto del código para realizar operaciones en la base de datos
// 	// ...
// 	// Finalmente, cerramos la conexión a la base de datos
// 	mongoose.connection.close();
// 	// Devolvemos una respuesta
// 	return { statusCode: 200, body: 'Conexión exitosa' };
// };

// app.listen(port, () => {
// 	console.log('hey ' + port);
// });
