const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true, // Allow any origin for debugging
    credentials: true
}));

// Debug Logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Health Check
app.get('/', (req, res) => res.send('Server is running'));

// Database Connection
const mongoURI = process.env.MONGO_URI
    ? process.env.MONGO_URI.replace('/?', '/rbac_db?') // Add database name to Atlas URI
    : 'mongodb://127.0.0.1:27017/rbac_db';

mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 30000, // Increased to 30 seconds
    socketTimeoutMS: 45000, // Socket timeout
    family: 4 // Use IPv4, skip trying IPv6
})
    .then(() => console.log('MongoDB Connected to:', mongoURI.split('@')[1] || 'localhost'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
