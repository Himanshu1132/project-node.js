// app.js
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./src/models");
const publicRoutes = require("./src/routes/publicRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", publicRoutes);

sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Public API service is running on port 4000");
  });
});
