const app = require('../app');
const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  const uri = process.env.MONGO_URI;
  
  if (!uri || uri === "place_your_mongo_uri_here") {
    throw new Error("MONGO_URI is not defined or is still the placeholder.");
  }

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log('MongoDB Connected via Serverless');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};

module.exports = async (req, res) => {
  try {
    await connectDB();
    app(req, res);
  } catch (err) {
    console.error('Failed to connect to DB:', err);
    res.status(500).json({ 
      error: 'Database connection failed', 
      details: err.message,
      hint: 'Check MONGO_URI environment variable' 
    });
  }
};
