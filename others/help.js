const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setImage('https://cdn.discordapp.com/attachments/748984375772840046/800487276173328445/f7179eb460f2925c2edab10872a3c6f6.gif')
    .setDescription(`

 User Commands
`.invite` - `.support` - `.about`
`.ping` - `.prefix` - `.uptime`
Music Commands
`.play` - `.skip` - `.skipto`
`.stop` - `.volume` - `.nowplaying`
`.suffle` - `.search` - `.resume`
`.remove` - `.queue` - `.filter`
`.loop` - `.lyric` - `.radio`
Links
[support](https://discord.gg/jcs4XwcExv)    -    [invite](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot)

`)

  
   .setColor("BLUE");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_11:814035839956418570>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
