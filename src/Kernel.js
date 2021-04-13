const Discord = require('discord.js');

const CommandManager = require('./CommandManager');
const EventManager = require('./EventManager');
const Logger = require('./Logger');

const configFile = require('../app/config/config.json');

class Kernel {
  static client;

  static parameters = new Map();

  static startClient() {
    this.client = new Discord.Client();
    CommandManager.load();
    EventManager.load(this.client);
    Object.entries(configFile).forEach(([key, value]) => {
      this.parameters.set(key, value);
    });
    this.login();
  }

  static login() {
    const clientToken = process.env.CLIENT_TOKEN;
    if (!clientToken) {
      return Logger.logNoClientToken();
    }
    this.client.login(clientToken).then(_ => {
      Logger.logConnectionSuccess();
    }).catch(_ => {
      Logger.logUnableToConnect();
    })
  }

  static reload() {
    CommandManager.reload();
    EventManager.reload(this.client);
    Logger.logReloadComplete();
  }
}

module.exports = Kernel;
