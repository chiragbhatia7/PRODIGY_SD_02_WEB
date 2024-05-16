const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerName: String,
  attempts: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Player", playerSchema);
