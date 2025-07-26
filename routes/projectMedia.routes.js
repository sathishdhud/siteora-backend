const express = require('express');
const router = express.Router();
const projectMediaController = require('../controllers/projectMedia.controller');

router.post('/', projectMediaController.createProjectMedia);
router.get('/', projectMediaController.getAllProjectMedia);
router.get('/:id', projectMediaController.getProjectMediaById);
router.put('/:id', projectMediaController.updateProjectMedia);
router.delete('/:id', projectMediaController.deleteProjectMedia);

module.exports = router; 