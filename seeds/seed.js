const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

// .json files that I'm grabbing data from
const categorySeedData = require('./categoryData.json');
const productSeedData = require('./productData.json');
const tagSeedData = require('./tagData.json');
const productTagSeedData = require('./productTagData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate(categorySeedData);
    const products = await Product.bulkCreate(productSeedData);
    const tags = await Tag.bulkCreate(tagSeedData);
    await ProductTag.bulkCreate(productTagSeedData);

    process.exit(0);
};

seedDatabase();