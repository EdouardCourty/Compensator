const ConsoleCommand = require('../ConsoleCommand');

const Kernel = require('../../../src/Kernel');

class StartClientCommand extends ConsoleCommand {

  constructor() {
    super();
    this.setName('client:start');
    this.setDescription('Starts the Discord client.');
    this.setUsage(null);
    this.setExecutor(this.executor);
  }

  executor(args) {
    Kernel.startClient();
  }
}

module.exports = StartClientCommand;
