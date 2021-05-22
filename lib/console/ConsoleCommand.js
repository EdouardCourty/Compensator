class ConsoleCommand {

  /** @type string */
  #name;
  /** @type string */
  #description;
  /** @type string */
  #usage;
  /** @type Function */
  #executor;

  /**
   * @param {string} name
   */
  setName(name) {
    this.#name = name;
  }

  /**
   * @param {string} description
   */
  setDescription(description) {
    this.#description = description;
  }

  /**
   * @param {string|null} usage
   */
  setUsage(usage = null) {
    this.#usage = usage;
  }

  /**
   * @returns {string}
   */
  getName() {
    return this.#name;
  }

  /**
   * @returns {string}
   */
  getDescription() {
    return this.#description;
  }

  /**
   * @returns {string}
   */
  getUsage() {
    return this.#usage;
  }

  /**
   * @returns {Function}
   */
  getRunner() {
    return this.run;
  }
}

module.exports = ConsoleCommand;