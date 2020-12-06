const { Client, RichEmbed } = require('discord.js');

const bot = new Client();

const token = ""; // Place bot token inside of these quotes

const PREFIX = "p!";

bot.on('ready', =>{
       console.log("The bot is active and ready to go!");
       });
bot.on('message', message =>{
  let args = message.content.substring(PREFIX.length).split(" ");
  switch(args[0]){
    case "poll":
      const Embed = new RichEmbed()
      .setColor(0xFFC300)
      .setTitle("Initiate Poll")
      .setDescription("p!poll to initiate a simple yes or no poll");
      if(!args[1]){
        message.channel.send(Embed);
        break;
      }
      let msgArgs = args.slice(1).join(" ");
      message.channel.send("📋 ""**" + msgArgs + "**").then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
        message.delete(1000).catch(console.error);
      });
      break;
  }
});

bot.login(token);
