const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  memmory: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Phone", PhoneSchema);
