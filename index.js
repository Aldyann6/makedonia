const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

const newUsers = []

client.once("ready", () => {
    console.log(`${client.user.username} ready!`);
    const status = [
    `Makedonia Server`,
    `md!info for info`,
    `#StaySafe`,
    `#StayHealthy`,
    `Road to 1k Members`,
    `developer by Aldyann`
  ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "WATCHING"})
  }, 5000)
  
  
});



client.on("message", message => {
 
//embed
  if(message.content.toLowerCase() === "md!info"){
    const embed = new Discord.MessageEmbed()
    .setAuthor("Embed chat")
    .setColor("#ffc300")
    .setDescription("**Bot Discord Makedonia**")
    .addField("link", "https://discord.io/makedonia")
    .addField("Author", "**Aldyan Ganteng**")
    .setFooter("Copyright @ 2021 by Makedonia.")
    .setTimestamp()
    message.channel.send(embed)
  }
  
//Welcome
  client.on("guildMemberAdd", async (member) => {

    let guild = client.guilds.cache.get("789541467604910080");
    let channel = client.channels.cache.get("789555451947778048");
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'emoji_11');

    if(guild != member.guild) {
      return console.log('Member join');
    } else {

      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Welcome To MAKEDONIA ${emoji}`)
      .setDescription(`Halo ${member.user}, Selamat datang di server ${guild.name} We hope to stay and Have fun`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter('ID member: ' + member.user.id)
      .setTimestamp();

      await channel.send(embed)
    }

  })
  

//commads message
  
  if (message.content === 'ping') {
	message.channel.send('Pong!!!.');
  }
  if (message.content === 'yann') {
	message.channel.send('**Aldyan Ganteng tq** :heart:');
  }
  if (message.content === 'Yann') {
	message.channel.send('**Aldyan Ganteng tq** :heart:');
  }
  if (message.content === 'gondrong') {
	message.channel.send('**Gondrong doang nyopet kaga** :joy:')
  }
  if (message.content === 'Gondrong') {
	message.channel.send('**Gondrong doang nyopet kaga** :joy:');
  }
  if (message.content === 'aw') {
	message.channel.send('** Awwww atid ditutuk djaroem**');
  }
  if (message.content === 'Aw') {
	message.channel.send('** Awwww atid ditutuk djaroem**');
  }
  if (message.content === 'cakep') {
	message.channel.send('** Sapa paling cantik?? sapa paling bodoh?? sapa paling Anjing??,,,,, Canda anjing** :joy:');
  }
  if (message.content === 'Cakep') {
	message.channel.send('** sapa paling cantik?? sapa paling bodoh?? sapa paling Anjing??,,,,, Canda anjing** :joy:');
  }
  if (message.content === 'tod') {
	message.channel.send('**apasih gajelas banget**');
  }
  if (message.content === 'Tod') {
	message.channel.send('**apasih gajelas banget**');
  }
  if (message.content === 'adoh') {
	message.channel.send('**aadohhh udahh oyy jan marah-marah ntar cepet tua kayak om teku**');
  }
  if (message.content === 'Adoh') {
	message.channel.send('**aadohhh udahh oyy jan marah-marah ntar cepet tua kayak om teku**');
  }
  if (message.content === 'Om om') {
	message.channel.send('**OM OM MAU NGAPAIN OM?**');
  }
  if (message.content === 'Om om') {
	message.channel.send('**BUKA CELANANYA**');
  }
  if (message.content === 'Om om') {
	message.channel.send('**OM JANGAN OM**');
  }
  if (message.content === 'Welcome') {
	message.channel.send('Jangan lupa cek ');
  }
  if (message.content === 'Everyone') {
	message.channel.send('@everyone');
  }
  
  
})

client.login(process.env.token)
