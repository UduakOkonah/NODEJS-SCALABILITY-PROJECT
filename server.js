// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Simulate a scalable, non-blocking endpoint
app.get('/api/data', (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      success: true,
      message: "Concurrent request handled successfully",
      time: new Date().toISOString()
    });
  }, 1000); // Simulate async processing
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Node.js Scalability Demo is Running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
