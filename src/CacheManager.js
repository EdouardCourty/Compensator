class CacheManager {

  static clearCommandsCache() {
    this.clearCacheEntryIfIncludes("app/commands");
  }

  static clearEventsCache() {
    this.clearCacheEntryIfIncludes("app/events");
  }

  /**
   * @param {string} string
   */
  static clearCacheEntryIfIncludes(string) {
    Object.keys(require.cache).filter(key => key.toLowerCase().includes(string)).forEach(key => {
      delete require.cache[key]
    })
  }
}

module.exports = CacheManager;
