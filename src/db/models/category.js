'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Category.associate = function (models) {
    Category.hasMany(models.Product, {
      foreignKey: {
        field: 'categoryId',
      },
      as: 'products',
    });
  };

  return Category;
};
