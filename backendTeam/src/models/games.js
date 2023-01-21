'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// let GamesSchema = new Schema({
// 	game: number,
// });

const Games = new Schema({
	idTeam1: { type: 'string' },
	idTeam2: { type: 'string' },
	sets: [
		{
			set: { type: Number },
			points: { type: Number },
			totalPoints: {
				team1: { type: Number },
				team2: { type: Number },
			},
			finished: { type: Boolean },
		},
	],
});

// module.exports = mongoose.model('Sets', GamesSchema);
// module.exports = mongoose.model('Sets', Games);
const Point = mongoose.model('Sets', Games);

