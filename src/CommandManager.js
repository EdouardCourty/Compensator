const Logger = require('./Logger');
const Command = require('../lib/client/Command');

const fs = require('fs');
const CacheManager = require("./CacheManager");

class CommandManager {

  /** @type Command[] */
  static commandList = [];

  static async load() {
    Logger.logCommandsLoading();
    const commandFiles = fs.readdirSync(`${__dirname}/../app/commands`)
      .filter(file => file.endsWith('.js'));

    for (let commandFile of commandFiles) {
      const commandModule = require(`../app/commands/${commandFile}`);
      /** @type Command */
      const constructedCommand = new commandModule();
      await constructedCommand.validate().then(_ => {
        this.commandList.push(constructedCommand);
        Logger.logSingleCommandLoadSuccess(constructedCommand.getName());
      }).catch(Logger.logSingleCommandLoadFailure);
    }
  }

  /**
   * @param {string} commandName
   * @returns {Promise<Command|void>}
   */
  static resolveCommand(commandName) {
    const matches = this.commandList.filter(command => command.getName() === commandName);
    return new Promise((resolve, reject) => {
      if (matches.length) {
        resolve(matches[0]);
      } else {
        reject();
      }
    })
  }

  static reload() {
    CacheManager.clearCommandsCache();
    this.commandList = [];
    this.load();
  }
}

module.exports = CommandManager;