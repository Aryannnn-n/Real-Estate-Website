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
  }
};

module.exports = async (req, res) => {
  await connectDB();
  app(req, res);
};
