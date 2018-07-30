const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('I am ready!');
});

client.on('message', message =>{
  if (message.content === '#creator'){
  message.reply('`Benji Celeven`');
  }
});

client.on('message', message =>{
  if (message.content === '#creatortwitch'){
  message.reply('`https://www.twitch.tv/benjiceleven');
  }
});

client.login(process.env.BOT_TOKEN);
