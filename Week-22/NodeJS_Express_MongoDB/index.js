const express = require("express");
const bodyParser = require("body-parser");
const assetsRoutes = require("./routes/assets");
const db = require("./config/database");
const app = express();
const port = 3000;

app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/assets", assetsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
