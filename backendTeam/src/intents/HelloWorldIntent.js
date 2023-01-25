const mongoose = require('mongoose');
const Score = require('../../index');
// const { Score } = require('./models/score');

const HelloWorldIntentHandler = {
	canHandle(handlerInput) {
		const { request } = handlerInput.requestEnvelope;
		return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
	},

	async handle(handlerInput) {
		let speechText = '';
		try {
			const score = new Score()
			console.log('Value of Score: ', Score);
			console.log('Value of mongoose connection status: ', mongoose.connection.readyState);

			const data = await score.find({}).select('sets.totalPoints.team1');

			speechText = `Los datos de tu base de datos son: ${JSON.stringify(data)}`;
		} catch (error) {
			speechText = `Error en la base de datos: ${error}`;
		}
		return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).getResponse();
	},
};

module.exports = { HelloWorldIntentHandler };
