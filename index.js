module.exports = (client, message, options) {    
    const links = ["http://", "https://", "www."];
    
    let warnMSG = (options && options.warnMSG) || `<@${message.author.id}>, please dont send links!`;
    let staffRole = (options && options.staffRole);
    
    if(message.member.roles.cache.has(staffRole) || message.member.hasPermission("ADMINISTRATOR")) return;
    
    if(links.some(x => message.content.toLowerCase().includes(x)) {
        message.delete();
        message.channel.send(warnMSG);
    };    
};
