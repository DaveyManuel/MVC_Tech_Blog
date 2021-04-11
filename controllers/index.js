const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./viewRoutes/home');
const dashboardRoutes = require('./viewRoutes/dashboard');

//starting point of home routes
router.use("/", homeRoutes)

//starting point of dashboard routes
router.use("/dashboard", dashboardRoutes)




//startting point of API routes
router.use("/api", apiRoutes)

module.exports = router