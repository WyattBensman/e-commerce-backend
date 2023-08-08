const express = require('express');
const tagRouter = express.Router();
const { Tag } = require('../../models');

// Route to get a list of all Categories
tagRouter.get('/', async (req, res) => {
    try {
        const allTags = await Tag.findAll();
        res.json(allTags);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get categories!' });
    }
});

// Route to get a specific Category by ID
tagRouter.get('/:id', async (req, res) => {
    try {
        const tagId = req.params.id;
        const tag = await Tag.findByPk(tagId);
        if (tag) {
            res.json(tag);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to get the post' });
    }
});

// Route to create a new item
tagRouter.post('/', async (req, res) => {
    try {
        const newItem = await Tag.create(req.body); // Assuming the request body contains the new item data
        res.status(201).json(newItem); // Return the newly created post as the response
    } catch (err) {
        res.status(500).json({ error: 'Failed to create the item' });
    }
});

// Route to update a specific post by ID
tagRouter.put('/:id', async (req, res) => {
    try {
        const tagId = req.params.id;
        const updatedId = await Tag.update(req.body, {
            where: { id: tagId },
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
tagRouter.delete('/:id', async (req, res) => {
    try {
        const tagId = req.params.id;
        const deletedId = await Tag.destroy({
            where: { id: tagId },
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

module.exports = tagRouter;