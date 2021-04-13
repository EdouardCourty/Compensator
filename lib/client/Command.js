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
  /** @type Function */
  #executor;

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
  getExecutor() {
    return this.#executor;
  }

  /**
   * @returns {boolean}
   */
  needsPermission() {
    return !!this.#permission;
  }
}

module.exports = Command;