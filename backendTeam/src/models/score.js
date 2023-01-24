'use strict';

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
let Schema = mongoose.Schema;

let ScoreSchema = new Schema({
	idTeam1: { type: 'string' },
	idTeam2: { type: 'string' },
	sets: { type: Array, required: true },
	
});


module.exports = mongoose.model('Score', ScoreSchema);
