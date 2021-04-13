const Event = require('../../lib/client/Event');
const Logger = require('../../src/Logger');

class ReadyEvent extends Event {
  constructor() {
    super();
    this.setTrigger('ready');
    this.setExecutor(this.executor);
  }

  executor() {
    Logger.logReadyEvent();
  }
}

module.exports = ReadyEvent;