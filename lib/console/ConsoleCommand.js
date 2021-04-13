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
   * @param {Function} executor
   */
  setExecutor(executor) {
    this.#executor = executor;
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
  getExecutor() {
    return this.#executor;
  }
}

module.exports = ConsoleCommand;