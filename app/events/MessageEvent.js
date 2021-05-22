const Event = require('../../lib/client/Event');
const Logger = require('../../src/Logger');
const Kernel = require('../../src/Kernel');
const CommandManager = require('../../src/CommandManager');

const {Client, Message} = require('discord.js');
const argumentParser = require('args-parser');

class MessageEvent extends Event {
  constructor() {
    super();
    this.setTrigger('message');
  }

  /**
   * @param {Client} client
   * @param {Message} message
   */
  async handle(client, message) {
    const isCommand = message.content.startsWith(Kernel.parameters.get('command_prefix'));

    if (Kernel.parameters.get('log_messages')) {
      Logger.logMessage(message);
    }

    if (isCommand) {
      await message.delete();
    }

    if (!message.author.bot && isCommand) {
      let args = message.content.split(' ');
      const commandName = args.shift().slice(1);

      CommandManager.resolveCommand(commandName).then(command => {
        if (command.needsPermission()) {
          if (message.member.hasPermission(command.getPermission())
            || parseInt(message.author.id) === Kernel.parameters.get('owner_id')
          ) {
            command.getRunner()(client, message, args);
            Logger.logCommandSuccess(commandName, args, message.author.tag, message.guild.name);
          } else {
            Logger.logLackOfPermissions(commandName, args, message.author.tag, message.guild.name);
          }
        } else {
          command.getRunner()(client, message, args);
          Logger.logCommandSuccess(commandName, args, message.author.tag, message.guild.name);
        } // TODO: Refactor this crappy method
      }).catch(_ => {
        Logger.logCommandNotFound(commandName, args, message.author.tag, message.guild.name);
      });
    }
  }
}

module.exports = MessageEvent;