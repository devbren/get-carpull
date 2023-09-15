const router = require('express').Router();
const userRoutes = require('./userroutes');

router.use('/users', userRoutes);

module.exports = router;
