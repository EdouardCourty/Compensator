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
   * @param {Function} executor
   */
  setExecutor(executor) {
    this.#executor = executor;
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
  getExecutor() {
    return this.#executor;
  }
}

module.exports = Event;
