const express = require('express');
const router = express.Router();
const blogTagController = require('../controllers/blogTag.controller');

router.post('/', blogTagController.createBlogTag);
router.get('/', blogTagController.getAllBlogTags);
router.get('/:id', blogTagController.getBlogTagById);
router.put('/:id', blogTagController.updateBlogTag);
router.delete('/:id', blogTagController.deleteBlogTag);

module.exports = router; 