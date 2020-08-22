const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const connect = require("../connect");
const SPIDataModel = require("../model");
const app = express();
const { urlencoded, json } = require("body-parser");

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/SPIData", async (req, res) => {
  const data = await SPIDataModel.find({ package: "C0402" }, null, {
    limit: 50000,
  })
    .select("rawData.height")
    .exec();
  res.status(200).json(data);
});

const dbUrl = "mongodb://localhost:27017/spi-data-usi-x11qph";
connect(dbUrl)
  .then(async (connection) => {
    app.listen(5000, () => {
      console.log("server is running");
    });
  })
  .catch((e) => console.error(e));
