const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531140699928788997")
setInterval(function() {
channel.send(` M̷y̷N̷a̷m̷e̷I̷s̷C̷a̷t̷4̷E̷v̷e̷r̷ M̷y̷N̷a̷m̷e̷I̷s̷C̷a̷t̷4̷E̷v̷e̷r̷ M̷y̷N̷a̷m̷e̷I̷s̷C̷a̷t̷4̷E̷v̷e̷r̷  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);