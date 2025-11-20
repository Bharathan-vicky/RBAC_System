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

// Diagnostic endpoint for deployment troubleshooting
app.get('/api/health', (req, res) => {
    const mongoStatus = mongoose.connection.readyState;
    const statusMap = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting'
    };

    res.json({
        status: 'Server is running',
        mongodb: {
            state: statusMap[mongoStatus] || 'unknown',
            stateCode: mongoStatus,
            database: mongoose.connection.db?.databaseName || 'not connected',
            host: mongoose.connection.host || 'not connected'
        },
        environment: {
            nodeEnv: process.env.NODE_ENV || 'development',
            hasMongoUri: !!process.env.MONGO_URI,
            mongoUriPreview: process.env.MONGO_URI
                ? process.env.MONGO_URI.substring(0, 20) + '...'
                : 'not set'
        },
        timestamp: new Date().toISOString()
    });
});

// Database Connection
let mongoURI;
if (process.env.MONGO_URI) {
    // Handle both formats: mongodb+srv://.../?params and mongodb+srv://.../
    const uri = process.env.MONGO_URI;
    if (uri.includes('/?')) {
        mongoURI = uri.replace('/?', '/rbac_db?');
    } else if (uri.includes('mongodb.net/') && !uri.includes('mongodb.net/rbac_db')) {
        // Insert database name before query params or at the end
        mongoURI = uri.replace('mongodb.net/', 'mongodb.net/rbac_db/');
    } else {
        mongoURI = uri;
    }
} else {
    mongoURI = 'mongodb://127.0.0.1:27017/rbac_db';
}

const connectDB = async () => {
    try {
        console.log('Attempting MongoDB connection...');
        console.log('MongoDB URI format:', mongoURI.substring(0, 30) + '...');

        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            family: 4
        });

        console.log('✅ MongoDB Connected Successfully!');
        console.log('Database:', mongoose.connection.db.databaseName);
        console.log('Host:', mongoose.connection.host);
    } catch (err) {
        console.error('❌ MongoDB Connection Failed!');
        console.error('Error name:', err.name);
        console.error('Error message:', err.message);
        if (err.reason) console.error('Reason:', err.reason);

        // Retry logic
        console.log('Retrying connection in 5 seconds...');
        setTimeout(connectDB, 5000);
    }
};

connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
