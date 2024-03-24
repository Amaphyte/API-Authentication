const mongoose = require("mongoose");
const roomTypeschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const roomType = mongoose.model("roomType", roomTypeschema);
module.exports = roomType;
