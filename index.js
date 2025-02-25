import { Client, Events, GatewayIntentBits } from 'discord.js';
import Config from "./server/config/config.js"

const client = new Client({ 
    intents: 
    [GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMessages,
     GatewayIntentBits.MessageContent]
 });

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    message.reply({
        content:"Hey dhuchki!"
    })
})

client.login(Config.app.token)