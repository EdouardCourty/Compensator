class Event {

  /** @type string */
  #trigger;
  /** @type Function */
  #executor;

  /**
   * @param {string} trigger
   */
  setTrigger(trigger) {
    this.#trigger = trigger;
  }

  /**
   * @returns {string}
   */
  getTrigger() {
    return this.#trigger;
  }

  /**
   * @returns {Function}
   */
  getHandler() {
    const handler = this.handle;
    if (!handler) {
      throw new Error(`The ${this.#trigger} event does not have a handle method.`);
    }
    return handler;
  }
}

module.exports = Event;
