const Command = require('../../lib/client/Command');
const Logger = require('../../src/Logger');
const Kernel = require('../../src/Kernel');

const {Client, Message} = require('discord.js');

class CompensateCommand extends Command {

  constructor() {
    super();
    this.setName('reload');
    this.setHelpText('Reload the event listeners and command handlers.');
    this.setPermission('ADMINISTRATOR');
    this.setUsage('$reload');
  }

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {*[]} args
   */
  run(client, message, args) {
    Logger.logReloadInizialized(message.author.tag);
    Kernel.reload();
  }
}

module.exports = CompensateCommand;
