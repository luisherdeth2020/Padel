'use strict';

const mongoose = require('mongoose');
const scoreSchema = new mongoose.Schema({
	idTeam1: String,
	idTeam2: String,
	sets: [
		{
			Equipo1set1: Number,
			Equipo1set2: Number,
			Equipo2set1: Number,
			Equipo2set2: Number,
			totalPoints: { equipo1: Number, equipo2: Number },
			finished: Boolean,
		},
	],
});
const Score = mongoose.model('score', scoreSchema);
module.exports = Score;
