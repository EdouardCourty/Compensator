const {Message} = require('discord.js');

const {getDate} = require('../lib/Utils');

class Logger {

  static COMMAND_SUCCESS = "[%date%] [COMMAND SUCCESS] %userTag% successfully executed the %commandName% command with arguments [%args%] on server %guildName%";
  static COMMAND_FAILED = "[%date%] [COMMAND FAILED] %userTag% tried to execute the %commandName% command with arguments [%args%] on server %guildName%";
  static COMMAND_LACK_OR_PERMS = "[%date%] [NO PERMISSION] %userTag% tried to execute the %commandName% command with arguments [%args%] on server %guildName%";
  static COMMAND_NOT_FOUND = "[%date%] [COMMAND NOT FOUND] %userTag% tried to execute an inexistent %commandName% command with arguments [%args%] on server %guildName%";

  static RELOAD_SUCCESS = "[%date%] [RELOAD COMPLETE] Reload complete.";
  static RELOAD_INITIALIZED = "[%date%] [RELOAD INITIALIZED] %userTag% initialized a reload.";

  static logCommandsLoading() {
    console.log('Loading commands...'.blue);
  }

  static logSingleCommandLoadSuccess(commandName) {
    console.log(`Loaded command ${commandName}.`.green);
  }

  static logEventsLoading() {
    console.log('Loading events...'.blue);
  }

  static logSingleEventLoadSuccess(eventName) {
    console.log(`Loaded event ${eventName}.`.green);
  }

  static logReadyEvent() {
    console.log('Ready event triggered.'.green);
  }

  static logErrorEvent(error) {
    console.error(error);
  }

  /**
   * @param {Message} message
   */
  static logMessage(message) {

  }

  static logCommandSuccess(commandName, commandArguments, userTag, guildName) {
    console.log(this.COMMAND_SUCCESS
      .replace('%date%', getDate())
      .replace('%userTag%', userTag)
      .replace('%commandName%', commandName)
      .replace('%args%', commandArguments.join(', '))
      .replace('%guildName%', guildName)
    );
  }

  static logCommandFailed(commandName, commandArguments, userTag, guildName) {
    console.log(this.COMMAND_FAILED
      .replace('%date%', getDate())
      .replace('%userTag%', userTag)
      .replace('%commandName%', commandName)
      .replace('%args%', commandArguments.join(', '))
      .replace('%guildName%', guildName)
    );
  }

  static logCommandNotFound(commandName, commandArguments, userTag, guildName) {
    console.log(this.COMMAND_NOT_FOUND
      .replace('%date%', getDate())
      .replace('%userTag%', userTag)
      .replace('%commandName%', commandName)
      .replace('%args%', commandArguments.join(', '))
      .replace('%guildName%', guildName)
    );
  }

  static logLackOfPermissions(commandName, commandArguments, userTag, guildName) {
    console.log(this.COMMAND_LACK_OR_PERMS
      .replace('%date%', getDate())
      .replace('%userTag%', userTag)
      .replace('%commandName%', commandName)
      .replace('%args%', commandArguments.join(', '))
      .replace('%guildName%', guildName)
    );
  }

  static logNoClientToken() {
    console.error('No token has been specified. Check your .env.dist file or create one and add a CLIENT_TOKEN entry, containing the Dicord bot token you want to use.'.red);
  }

  static logUnableToConnect() {
    console.error('Unable to connect using the specified token. Is it correct ?'.yellow);
  }

  static logConnectionSuccess() {
    console.log('Connection established.'.green);
  }

  static logReloadComplete() {
    console.log(this.RELOAD_SUCCESS
      .replace('%date%', getDate())
    );
  }

  static logReloadInizialized(userTag) {
    console.log(this.RELOAD_INITIALIZED
      .replace('%date%', getDate())
      .replace('%userTag%', userTag)
    );
  }
}

module.exports = Logger;