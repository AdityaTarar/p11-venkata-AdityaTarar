const express = require("express");
const router = express.Router();
const assetsController = require("../controllers/assetsController");

router.get("/", assetsController.getAllAssets);
router.post("/", assetsController.createAsset);

module.exports = router;
