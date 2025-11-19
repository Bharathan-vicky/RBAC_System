const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/admin', protect, authorize('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin! You have access to this protected route.' });
});

router.get('/manager', protect, authorize('admin', 'manager'), (req, res) => {
    res.json({ message: 'Welcome Manager! You have access to this protected route.' });
});

router.get('/user', protect, authorize('admin', 'manager', 'user'), (req, res) => {
    res.json({ message: 'Welcome User! You have access to this protected route.' });
});

module.exports = router;
