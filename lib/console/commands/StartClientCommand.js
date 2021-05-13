const ConsoleCommand = require('../ConsoleCommand');

const Kernel = require('../../../src/Kernel');
const LocalStorage = require('../../client/LocalStorage');

class StartClientCommand extends ConsoleCommand {

  constructor() {
    super();
    this.setName('client:start');
    this.setDescription('Starts the Discord client.');
    this.setUsage(null);
    this.setExecutor(this.executor);
  }

  async executor(args) {
    if (args['stay-offline']) {
      LocalStorage.set('offline-mode', true);
    }
    await Kernel.startClient();
  }
}

module.exports = StartClientCommand;
