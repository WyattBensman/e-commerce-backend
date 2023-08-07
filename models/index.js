const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');
const ProductTag = require('./productTag');

// Define associations
Category.hasMany(Product, {
    foreignKey: 'categoryId',
});

Product.belongsTo(Category, {
    foreignKey: 'categoryId',
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'productId',
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tagId',
});

module.exports = {
    Category,
    Product,
    Tag,
    ProductTag,
};