const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');


router.use(userRoutes, '/users')
router.use(postRoutes, '/posts')
router.use(commentRoutes, '/comments')

module.exports = router;