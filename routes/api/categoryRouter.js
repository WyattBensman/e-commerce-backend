const express = require('express');
const categoryRouter = express.Router();
const { Category } = require('../../models');

// Route to get a list of all Categories
router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.findAll();
        res.json(allCategories);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get categories!' });
    }
});

// Route to get a specific Category by ID
router.get('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findByPk(categoryId);
        if (category) {
            res.json(category);
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
        const categoryId = req.params.id;
        const updatedId = await Category.update(req.body, {
            where: { id: categoryId },
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
router.delete('/api/posts/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const deletedId = await Post.destroy({
            where: { id: categoryId },
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

module.exports = categoryRouter;