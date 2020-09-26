const Discord = require(`discord.js`)


module.exports = {
    name: "help",
    run: async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(`Przykladowe menu pomocy`)
.addField(`prefix + test`, `testowa komenda`)
.addField(`prefix + testembed`, `testowy embed`)
.setColor(`RANDOM`)
        message.channel.send(embed)
    }}