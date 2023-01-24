'use strict';

let express = require('express');

let Score = require('../controllers/score');

// Llamamos al objeto router de express

let router = express.Router();

// Rutas para el score

router.post('/score', Score.save);

router.get('/score', Score.getScore);

router.delete('/delete/:id', Score.delete);

module.exports = router;

// C:\Users\cuent\Documents\proyectoPadel\backendTeam\src\controllers\score.js:5:13)

// https://www.youtube.com/watch?v=a25KhsMZepY

// chango -15p | Toni 0(real) / 30p para Alexa XD

// Partida 

// base de datos
// Equipo A - Equipo B (jugadores)
// score

// llamdas a la sql