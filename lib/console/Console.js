const CommandLoader = require('./CommandLoader');

class Console {
  static init(argv) {
    let commandArgs = argv['_'].toString().split(',');
    const commandName = commandArgs.shift();

    const parsedArgs = require('args-parser')(process.argv);
    delete parsedArgs[commandName];

    CommandLoader.loadCommands();

    const command = CommandLoader.commands.has(commandName)
      ? CommandLoader.commands.get(commandName)
      : CommandLoader.commands.get('info')

    command.getRunner()(parsedArgs);
  }
}

module.exports = Console;
