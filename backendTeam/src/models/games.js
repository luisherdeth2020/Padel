'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GamesSchema = new Schema({
	game: number,
});

module.exports = mongoose.model('Sets', GamesSchema);
