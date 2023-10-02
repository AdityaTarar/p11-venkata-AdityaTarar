const Asset = require("../models/Asset");

module.exports = {
  getAllAssets: (req, res) => {
    Asset.getAllAssets((err, results) => {
      if (err) {
        console.error("Error fetching assets:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json(results);
      }
    });
  },

  createAsset: (req, res) => {
    const { name, type, value } = req.body;
    const newAsset = { name, type, value };

    Asset.createAsset(newAsset, (err, result) => {
      if (err) {
        console.error("Error creating asset:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res
          .status(201)
          .json({ message: "Asset created successfully", id: result.insertId });
      }
    });
  },
};
