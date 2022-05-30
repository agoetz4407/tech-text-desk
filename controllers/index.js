const router = require('express').Router();

const apiRoutes = require('./api/');


router.use('/api', apiRoutes);
//TODO: router.use public routes here

module.exports = router;