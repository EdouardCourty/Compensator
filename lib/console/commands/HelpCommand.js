const ConsoleCommand = require('../ConsoleCommand');
const CommandLoader = require('../CommandLoader');

class HelpCommand extends ConsoleCommand {

  constructor() {
    super();
    this.setName('info');
    this.setDescription('Lists all the available commands.');
    this.setUsage(null);
  }

  run() {
    const commands = Array.from(CommandLoader.commands.values()).map(command => {
      return {
        name: command.getName(),
        description: command.getDescription()
      }
    })
    let groups = {};
    commands.forEach(command => {
      const commandParts = command.name.split(':');
      if (commandParts.length > 1) { // Has a sub selector ':'
        let group = groups[commandParts[0]];
        if (group instanceof Array) {
          groups[commandParts[0]].push(command)
        } else {
          groups[commandParts[0]] = [command]
        }
      } else {
        groups[commandParts[0]] = [command]
      }
    })
    Object.keys(groups).forEach(key => {
      console.log(`+---------------------------- ${key} ----------------------------+`)
      let group = groups[key];
      group.forEach(command => {
        console.log(` ${command.name.padEnd(30, ' ')} ${command.description}`)
      })
    })
  }
}

module.exports = HelpCommand;
