// La lógica para Enviar, Modificar recibir el score

'use strict';

let Score = require('../models/score');

// Creamos un objeto para disponer de todos los métodos de ruta que vamos a definir

let controller = {
	// Métodos guardar la puntuación
	save: (req, res) => {
		// req = recoger
		let params = req.body;
		console.log(params)
		let score = new Score(params);
		// vamos a guardar el OBJETO
		// let score = new Score();
		
        // Asignamos valores:
		// score.score = params.score;

		// save esquema generado
		score.save((err, scoreStored) => {
			if (err || !scoreStored) {
				return res.status(404).send({
					status: 'error',
					message: 'El score no se ha guardado',
				});
			}
			return res.status(200).send({
				status: 'success',
				scoreStored,
			});
		});
	},

	// Métodos para visualizar el Score

	getScore: (req, res) => {
		let query = Score.find({});

		//más reciente al más antiguo
		// .sort()('-date')
		query
			.exec((err, score) => {
				if (err)
					return res.status(500).send({
						status: 'error',
						message: 'Error al extraer los datos',
					});
				if (!score) {
					return res.status(500).send({
						status: 'error',
						message: 'No existe score(puntos)',
					});
				}
				return res.status(200).send({
					status: 'success',
					score,
				});
			});
	},

	// Método eliminar Score
	delete: (req, res) => {
		//Obtener ID a través de la url
		let scoreId = req.params.id;

		Score.findOneAndDelete({ id: scoreId }, (err, scoreRemove) => {
			if (err)
				return res.status(500).send({
					status: 'error',
					message: 'Error al eliminar el score',
				});
			if (!scoreRemove){
				return res.status(400).send({

					status: 'error',
					message: 'No se ha encontrado el articulo al eliminar',
				});
            }

			return res.status(200).send({
				status: 'success',
				score: scoreRemove,
			});
		});
	},
};

module.exports = controller;