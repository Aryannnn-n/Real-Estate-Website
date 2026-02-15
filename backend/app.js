const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes.js');
const contentRoutes = require('./routes/content.routes.js');

const app = express();

app.use(cors({
  origin: '*', // Allow all origins for simplicity in this demo
}));
app.use(express.json());

// Test Route For Vercel
app.get("/" , (req,res)=>{
  res.send("Working...")
})

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

module.exports = app;
