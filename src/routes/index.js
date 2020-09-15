var express = require('express');
const productRouter = require('./product');
const errorHandler = require('./../middlewares/errorHandler');

const router = express.Router();

router.use('/product', productRouter);
router.use(errorHandler);

module.exports = router;
