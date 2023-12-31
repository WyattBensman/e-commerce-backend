const express = require('express');
const productTagRouter = express.Router();
const { ProductTag } = require('../../models');

// Route to get a list of all Categories
productTagRouter.get('/', async (req, res) => {
    try {
        const allProductTags = await ProductTag.findAll();
        res.json(allProductTags);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get categories!' });
    }
});

// Route to get a specific Category by ID
productTagRouter.get('/:id', async (req, res) => {
    try {
        const productTagId = req.params.id;
        const productTag = await ProductTag.findByPk(productTagId);
        if (productTag) {
            res.json(productTag);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to get the post' });
    }
});

// Route to create a new item
productTagRouter.post('/', async (req, res) => {
    try {
        const newItem = await ProductTag.create(req.body); // Assuming the request body contains the new item data
        res.status(201).json(newItem); // Return the newly created post as the response
    } catch (err) {
        res.status(500).json({ error: 'Failed to create the item' });
    }
});

// Route to update a specific post by ID
productTagRouter.put('/:id', async (req, res) => {
    try {
        const productTagId = req.params.id;
        const updatedId = await ProductTag.update(req.body, {
            where: { id: productTagId },
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
productTagRouter.delete('/:id', async (req, res) => {
    try {
        const productTagId = req.params.id;
        const deletedId = await ProductTag.destroy({
            where: { id: productTagId },
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

module.exports = productTagRouter;