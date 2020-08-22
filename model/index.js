const mongoose = require("mongoose");

// data structure
// { id, package, deviceType, designator, pin, rawData:[{barcode,volume,area,height} ...]  }

const spiDataSchema = new mongoose.Schema({
  package: String,
  deviceType: String,
  designator: String,
  pin: String,
  rawData: [
    {
      barcode: String,
      volume: Number,
      area: Number,
      height: Number,
    },
  ],
});

module.exports = mongoose.model("spi-data", spiDataSchema);
