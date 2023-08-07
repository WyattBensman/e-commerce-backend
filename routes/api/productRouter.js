const express = require('express');
const productRouter = express.Router();
const { Product } = require('../../models');

// Route to get a list of all Categories
router.get('/', async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.json(allProducts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get categories!' });
    }
});

// Route to get a specific Category by ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to get the post' });
    }
});

// Route to update a specific post by ID
router.put('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedId = await Product.update(req.body, {
            where: { id: productId },
        }); // Update post with the provided data in the request body
        if (updatedId[0] === 1) {
            res.json({ message: 'Post updated successfully' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to update the post' });
    }
});

// Route to delete a specific post by ID
router.delete('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedId = await Product.destroy({
            where: { id: productId },
        }); // Delete post with the provided ID
        if (deletedId === 1) {
            res.json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete the post' });
    }
});

module.exports = productRouter;