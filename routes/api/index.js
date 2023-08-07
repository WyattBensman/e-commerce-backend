const express = require('express');
const apiRouter = express.Router();

// Individual routers for different resources
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const productTagRouter = require('./productTagRouter');
const tagRouter = require('./tagRouter');

// Individual routers under their respective paths
apiRouter.use('/category', categoryRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/productTag', productTagRouter);
apiRouter.use('/tag', tagRouter);

module.exports = apiRouter;