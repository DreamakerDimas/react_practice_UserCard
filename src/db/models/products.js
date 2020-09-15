'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: { type: DataTypes.STRING, allowNull: false },
  });

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      foreignKey: {
        field: 'categoryId',
      },
      as: 'category',
    });
  };
  return Product;
};
