'use strict';

module.exports = {
	run: async (client, message) => {
		message.reply(`Pong!\n ${client.ws.ping}ms is the latency`);
	},
	aliases: ['p'],
	description: 'Tells the user the latency.',
};
