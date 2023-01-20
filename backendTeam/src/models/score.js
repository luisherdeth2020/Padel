'use strict';

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
let Schema = mongoose.Schema;

let ScoreSchema = new Schema({
	pointsA: { type: Number },
	pointsB: { type: Number },
});

module.exports = mongoose.model('Score', ScoreSchema);
