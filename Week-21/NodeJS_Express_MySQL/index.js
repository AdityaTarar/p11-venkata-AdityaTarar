const express = require("express");
const bodyParser = require("body-parser");
const assetsRoutes = require("./routes/assets");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/assets", assetsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
