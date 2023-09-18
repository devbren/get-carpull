const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const api = require('./api');
const cloudinaryRoutes = require('./cloudinaryRoutes.js');


router.use('/', homeRoutes);
router.use('/api', api);
router.use('/', cloudinaryRoutes);

module.exports = router;

// Test


