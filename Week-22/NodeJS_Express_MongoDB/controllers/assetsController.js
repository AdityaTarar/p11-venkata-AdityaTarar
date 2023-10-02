const Asset = require("../models/Asset");

module.exports = {
  getAllAssets: async (req, res) => {
    try {
      const assets = await Asset.find();
      res.json(assets);
    } catch (err) {
      console.error("Error fetching assets:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createAsset: async (req, res) => {
    const { name, type, value } = req.body;
    const newAsset = new Asset({ name, type, value });

    try {
      const savedAsset = await newAsset.save();
      res
        .status(201)
        .json({ message: "Asset created successfully", id: savedAsset._id });
    } catch (err) {
      console.error("Error creating asset:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
