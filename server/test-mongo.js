const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI
    ? process.env.MONGO_URI.replace('/?', '/rbac_db?')
    : 'mongodb://127.0.0.1:27017/rbac_db';

console.log('Attempting to connect to:', mongoURI.replace(/:[^:@]+@/, ':****@'));
console.log('Connection timeout: 30 seconds');

mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    family: 4
})
    .then(() => {
        console.log('✅ MongoDB Connected Successfully!');
        console.log('Database:', mongoose.connection.db.databaseName);
        mongoose.connection.close();
        process.exit(0);
    })
    .catch(err => {
        console.error('❌ MongoDB Connection Error:');
        console.error('Error name:', err.name);
        console.error('Error message:', err.message);
        if (err.reason) {
            console.error('Reason:', err.reason);
        }
        process.exit(1);
    });

// Add timeout handler
setTimeout(() => {
    console.log('⏱️  Still waiting for connection...');
}, 10000);
