const Event = require('../../lib/client/Event');
const Logger = require('../../src/Logger');
const Kernel = require('../../src/Kernel');

class ErrorEvent extends Event {
  constructor() {
    super();
    this.setTrigger('error');
  }

  handle(client, error) {
    if (Kernel.parameters.get('log_error_event')) {
      Logger.logErrorEvent(error);
    }
  }
}

module.exports = ErrorEvent;