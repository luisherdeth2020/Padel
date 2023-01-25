'use strict';

const mongoose = require('mongoose');
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
const Score = mongoose.model('score', scoreSchema);
module.exports = Score;