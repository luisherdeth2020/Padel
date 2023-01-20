'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SetsSchema = new Schema({
	set: number,
});

module.exports = mongoose.model('Sets', SetsSchema);
