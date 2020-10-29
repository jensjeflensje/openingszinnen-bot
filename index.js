const {Client, MessageEmbed} = require('discord.js');
const su = require('superagent')
const {token, prefix} = require('./config.json')
const client = new Client();
client.login(token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!openingszin') {
    su.get('https://hebben-we-een.date/api/random/').then((res) => {
      let data = res.body.sentence;
      let embed = new MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle(data.title)
        .setDescription(data.content)
        .setFooter(data.author);
      msg.channel.send(embed);
    });
  }
});

