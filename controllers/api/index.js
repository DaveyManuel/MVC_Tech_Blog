const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

//route is at /api/user (all user data)
router.use('/user', userRoutes)

//route is at /api/posts (all tech blog posts data)
router.use('/posts', postRoutes)

module.exports = router