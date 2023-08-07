const express = require('express');
const mainRouter = express.Router();

// Import individual routers for different sections
const apiRouter = require('./api');

// Mount the individual routers under their respective paths
mainRouter.use('/api', apiRouter);

module.exports = mainRouter;