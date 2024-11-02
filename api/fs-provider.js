var fs = require("node:fs");
/**
 * Create directory
 *
 * @param directory
 */
function mkdirSyncRecursive(directory) {
  var path = directory.replace(/\/$/, "").split("/");
  for (var i = 1; i <= path.length; i++) {
    var segment = path.slice(0, i).join("/");
    segment.length > 0 && !fs.existsSync(segment)
      ? fs.mkdirSync(segment)
      : null;
  }
}

class fsProvider {
  constructor(path) {
    if (!fs.existsSync(path)) {
      mkdirSyncRecursive(path);
    }
    if (path.substr(-1) !== "/") {
      path += "/";
    }
    this.path = path;
  }
  getToken(hashName) {
    if (fs.existsSync(this.path + hashName)) {
      return fs.readFileSync(this.path + hashName, { encoding: "utf8" });
    } else {
      return "";
    }
  }
  setToken(hashName, token) {
    fs.writeFileSync(this.path + hashName, token);
  }
}

exports.fsProvider = fsProvider;
