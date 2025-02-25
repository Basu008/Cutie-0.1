import { Client, Events, GatewayIntentBits } from 'discord.js';
import Config from "./server/config/config.js"

const client = new Client({ 
    intents: 
    [GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMessages,
     GatewayIntentBits.MessageContent]
 });

client.on(Events.MessageCreate, (message) => {
    if (message.author.bot) return
    message.reply({
        content:Config.app.messageReply
    })
})

client.on(Events.InteractionCreate, (interaction) => {
    interaction.reply(getRandomMessage())
})

client.login(Config.app.token)

function getRandomMessage(){
    return Config.app.messages[Math.floor(Math.random() * 5)]
}