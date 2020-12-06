const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");

module.exports = (client, message, options) => { 

 let link = ["http://", "https://", "www."];
 let foundLink = false; // set foundLink to false
 let warnMSG = (options && options.warnMSG) || `<@${message.author.id}> dont send links!`; // warn msg
 let staffRole = (options && options.staffRole); 

// if non channel
for (var i in link) {
  if(message.content.toLowerCase().includes(link[i].toLowerCase())) foundLink = true;
}

// loop
for (var i in staffRole){
    if(message.member.roles.cache.has(staffRole)) foundLink = false;
}

if (foundLink) {
 if(message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete()
    message.channel.send(`${warnMSG}`)
}

}