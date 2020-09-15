const { Product } = require('./../db/models');

var controllersProduct = {
  createProduct: async function (req, res, next) {
    try {
      const createdProduct = await Product.create(req.body);
      if (createdProduct) {
        return res.status(201).send(createdProduct);
      }
      return next(new Error());
    } catch (e) {
      next(e);
    }
  },
  getProduct: async function (req, res, next) {
    try {
      const foundProduct = await Product.findByPk(req.params.productId);
      if (foundProduct) {
        return res.status(201).send(foundProduct);
      }
      next('Product not found!');
    } catch (e) {
      next(e);
    }
  },
  patchProductByPk: async function (req, res, next) {
    try {
      console.log(req.params);
      const [RowsCount, Rows] = await Product.update(req.body, {
        where: {
          id: req.params.productId,
        },
        returning: true,
      });
      if (RowsCount) {
        const data = Rows[0].get();
        return res.status(201).send(data);
      }
      next('Product not found!');
    } catch (e) {
      next(e);
    }
  },
  deleteProductByPk: async function (req, res, next) {
    try {
      const deletedProduct = await Product.destroy({
        where: { id: req.params.productId },
      });
      if (deletedProduct) {
        return res.status(201).send(deletedProduct);
      }
      next('Product not found!');
    } catch (e) {
      next(e);
    }
  },
};

module.exports = controllersProduct;
