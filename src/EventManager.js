const CacheManager = require('./CacheManager');
const Logger = require('./Logger');
const Event = require('../lib/client/Event');

const fs = require('fs');

class EventManager {
  static load(client) {
    Logger.logEventsLoading();
    fs.readdirSync(`${__dirname}/../app/events`)
      .filter(file => file.endsWith('.js'))
      .forEach(eventFile => {
        const eventModule = require(`../app/events/${eventFile}`);
        /** @type Event */
        const constructedEvent = new eventModule();
        client.on(constructedEvent.getTrigger(), constructedEvent.getHandler().bind(null, client));
        Logger.logSingleEventLoadSuccess(constructedEvent.getTrigger())
      })
  }

  static reload(client) {
    CacheManager.clearEventsCache();
    this.load(client);
  }
}

module.exports = EventManager;
