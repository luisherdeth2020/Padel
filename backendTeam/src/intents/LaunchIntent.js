const LaunchRequest = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
	},
	handle(handlerInput) {
		// const speechText = 'Hola, bienvenido a prueba dos.';
		const speechText = 'Hola, bienvenido a WIKIPADEL';

		return handlerInput.responseBuilder
		.speak(speechText)
		.reprompt(speechText)
		.getResponse();
	},
};

module.exports = { LaunchRequest };
