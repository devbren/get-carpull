const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const api = require('./api');
// const cloudinaryRoutes = require('./cloudinaryRoutes.js');

router.use('/api', api);
// router.use('/test', cloudinaryRoutes);
// router.use('/', cloudinaryRoutes);


router.use('/', homeRoutes);

module.exports = router;


