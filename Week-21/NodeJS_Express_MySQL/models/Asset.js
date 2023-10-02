const db = require("../config/database");

class Asset {
  static getAllAssets(callback) {
    const query = "SELECT * FROM assets";
    db.query(query, callback);
  }

  static createAsset(newAsset, callback) {
    const query = "INSERT INTO assets (name, type, value) VALUES (?, ?, ?)";
    db.query(query, [newAsset.name, newAsset.type, newAsset.value], callback);
  }
}

module.exports = Asset;
