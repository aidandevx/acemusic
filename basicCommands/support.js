const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
      const supportServerLink = "dsc.gg/acesupport";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: '', 
              url: 'dsc.gg/acesupport'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ `)
            .setImage('https://i.ibb.co/1GHGsxV/standard.gif')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};
