const YesIntentHandler = {
	canHandle(handlerInput) {
		const { request } = handlerInput.requestEnvelope;
		return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.YesIntent';
	},
	handle(handlerInput) {
		// aqui puedes poner tu lógica para manejar el intent
		return handlerInput.responseBuilder
        .speak('Sí, entiendo')
        .getResponse();
	},
};

module.exports = { YesIntentHandler };
