const Discord = require(`discord.js`);

module.exports = {
    name: "test",
    run: async (bot, message, args) => {

        message.channel.send(`komenda dziala!`)
    }
}