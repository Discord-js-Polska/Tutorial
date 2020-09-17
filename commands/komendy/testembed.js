const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "testembed",
    run: async (bot, message, args) => {

        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`embed dziala`)
   	
        .setThumbnail(message.author.avatarURL())
        message.channel.send(wiadomosc_embed)
    }
}