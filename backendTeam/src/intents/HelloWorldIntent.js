const mongoose = require('mongoose');
const Score = require('../models/score');
const { YesIntentHandler } = require('./yesIntent');

const HelloWorldIntentHandler = {
		canHandle(handlerInput) {
		const isYesIntent = handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'YesIntent';
		console.log(`isYesIntent: ${isYesIntent}`);
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& ( handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent'
			|| isYesIntent)
		
	},


	async handle(handlerInput) {
		if (handlerInput.requestEnvelope.request.intent.name === 'YesIntent') {
			return YesIntentHandler.handle(handlerInput);
		} else {
			const speechText = await dora();
			// const repromptText = await losettt();
			return handlerInput.responseBuilder
				.speak(speechText + dimesets())
				.reprompt(dimesets())
				.getResponse();
		}
	},
};

function dimesets() {
	return ' Quiéres los sets de cada Equipo?';
}

async function dora() {
	try {
		const data = await Score.findOne()
			.sort({ _id: -1 })
			.select('-_id sets.totalPoints.equipo1 sets.totalPoints.equipo2');

		return `Los datos de tu base de datos son: ${JSON.stringify(data.sets)}`;
	} catch (error) {
		return `Error en la base de datos: ${error}`;
	}
}

async function losettt() {
	try {
		const data = await Score.findOne()
			.sort({ _id: -1 })
			.select('-_id sets.Equipo1set1 sets.Equipo1set2 sets.Equipo2set1 sets.Equipo2set2');

		return `Los datos son: ${JSON.stringify(data.sets)}`;
	} catch (error) {
		return `Error en la base de datos: ${error}`;
	}
}
module.exports = { HelloWorldIntentHandler };
