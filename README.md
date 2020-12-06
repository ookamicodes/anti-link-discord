# Anti-Link-Discord

 <a href="https://nodei.co/npm/anti-link-discord/"><img src="https://nodei.co/npm/anti-link-discord.png?downloads=true&stars=true" alt="npm installnfo" /></a>

<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/ookamicodes/anti-link-discord"> <img alt="npm" src="https://img.shields.io/npm/v/anti-link-discord"> <img alt="npm" src="https://img.shields.io/npm/dw/anti-link-discord"> <img alt="npm" src="https://img.shields.io/npm/dt/anti-link-discord">


Add the Anti Link Package in your bot to filter out links.
If you need help or have suggestions, please look in our Discord server. [CLICK ME TO JOIN](https://discord.gg/FGzCdtP)
ß
## Install

```css
npm install anti-link-discord
```

## Usage Example

```javascript
const antiLink = require("anti-link-discord")

        antiLink(client, message, {
            staffRole: "ROLEID", // staff/admin/mod role id (will ignore this role)
            warnMSG: `<@${message.author.id}> don't send links!`, // warn message
        });
                             
```

### Example
```javascript
const Discord = require('discord.js')            // discord.js
const client = new Discord.Client();            // discord client
const antiLink = require("anti-link-discord"); // module

// console log when ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)                  
})

// Module Setup
client.on('message', async message => {
      antiLink(client, message, {
            staffRole: "ROLEID", // staff/admin/mod role id (will ignore this role)
            warnMSG: `<@${message.author.id}> don't send links!`, // warn message
        });                  
});

// Client Login
client.login('token')                                               

```

## Changelog

**1.0.0:** Release

## Support

Join the support server: [CLICK ME](https://discord.gg/FGzCdtP)