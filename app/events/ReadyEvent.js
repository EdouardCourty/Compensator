const Event = require('../../lib/client/Event');
const Logger = require('../../src/Logger');

class ReadyEvent extends Event {
  constructor() {
    super();
    this.setTrigger('ready');
  }

  handle(client) {
    Logger.logReadyEvent(client.user.tag);
  }
}

module.exports = ReadyEvent;
