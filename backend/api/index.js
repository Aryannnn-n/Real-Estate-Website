const app = require('../app');
const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
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
