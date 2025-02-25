import { REST, Routes } from 'discord.js';
import Config from "./server/config/config.js"

const commands = [
  {
    name: Config.app.commands[0],
    description: Config.app.descriptions[0],
  },
];

const rest = new REST({ version: '10' }).setToken(Config.app.token);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(Config.app.clientID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}