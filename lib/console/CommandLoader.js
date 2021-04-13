const fs = require('fs');

class CommandLoader {

  static commands = new Map();

  static loadCommands() {
    fs.readdirSync(`${__dirname}/commands`)
      .filter(file => file.endsWith('.js'))
      .forEach(file => {
        const commandModule = require(`./commands/${file}`);
        const constructedCommand = new commandModule();
        this.commands.set(constructedCommand.getName(), constructedCommand);
      });
  }
}

module.exports = CommandLoader;
