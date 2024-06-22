// app.js
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./src/models");
const authRoutes = require("./src/routes/authRoutes");
const candidateRoutes = require("./src/routes/candidateRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", candidateRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Main service is running on port 3000");
  });
});
