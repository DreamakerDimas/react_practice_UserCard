const express = require('express');
const {
  createProduct,
  getProduct,
  patchProductByPk,
  deleteProductByPk,
} = require('../controllers/product');
const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/:productId', getProduct);
productRouter.patch('/:productId', patchProductByPk);
productRouter.delete('/:productId', deleteProductByPk);

module.exports = productRouter;
