const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#146DF6").setTitle("").setDescription(" [Click Here](https://discord.com/api/oauth2/authorize?client_id=794288634659995659&permissions=3439696&scope=bot) to invite the bot.")
    .setFooter(""));
  }
}
