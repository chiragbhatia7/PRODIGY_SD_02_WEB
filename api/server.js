const express = require("express");
const mongoose = require("mongoose");
const Player = require("./models/Player");
const cors = require("cors");

require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());

app.get("/leaderboard", async (req, res) => {
  try {
    const players = await Player.find()
      .sort({ attempts: 1, date: -1 }) // Sort by attempts in ascending order and date in descending order
      .limit(10); // Fetch latest 10 players
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/players", async (req, res) => {
  try {
    const { playerName, attempts } = req.body;
    let player = await Player.findOne({ playerName });
    if (player) {
      // If player exists, update date and attempts
      player.date = new Date();
      player.attempts = attempts;
    } else {
      // If player does not exist, create a new entry
      player = new Player({ playerName, attempts });
    }
    await player.save();
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/players/:playerName", async (req, res) => {
  try {
    const { playerName } = req.params;
    const player = await Player.findOneAndDelete({ playerName });
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json({ message: "Player deleted successfully", player });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
