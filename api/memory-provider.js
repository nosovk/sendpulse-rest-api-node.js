class memoryProvider {
  constructor() {
    this.store = {};
  }
  getToken(hashName) {
    return this.store[hashName] || "";
  }
  setToken(hashName, token) {
    return (this.store[hashName] = token);
  }
}

exports.memoryProvider = memoryProvider;
