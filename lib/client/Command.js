const {Permissions} = require('discord.js');

class Command {

  /** @type string */
  #name;
  /** @type string */
  #helpText;
  /** @type string */
  #usage;
  /** @type string */
  #permission;

  /**
   * @param {string} name
   */
  setName(name) {
    this.#name = name;
  }

  /**
   * @param {string} text
   */
  setHelpText(text) {
    this.#helpText = text;
  }

  /**
   * @param {string} text
   */
  setUsage(text) {
    this.#usage = text;
  }

  /**
   * @param {string} permission
   */
  setPermission(permission) {
    if (Object.keys(Permissions.FLAGS).includes(permission)) {
      this.#permission = permission;
    }
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
  getHelpText() {
    return this.#helpText;
  }

  /**
   * @returns {string}
   */
  getUsageText() {
    return this.#usage;
  }

  /**
   * @returns {string}
   */
  getPermission() {
    return this.#permission;
  }

  /**
   * @returns {Function}
   */
  getRunner() {
    const runner = this.run;
    if (!runner) {
      throw new Error(`The ${this.#name} command does not have an executor.`);
    }
    return runner;
  }

  /**
   * @returns {boolean}
   */
  needsPermission() {
    return !!this.#permission;
  }

  validate() {
    return new Promise((resolve, reject) => {
      Object.keys(this).forEach(key => {
        console.log(key);
      })
      resolve();
    })
  }
}

module.exports = Command;