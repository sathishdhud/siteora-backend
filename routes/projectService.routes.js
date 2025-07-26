const express = require('express');
const router = express.Router();
const projectServiceController = require('../controllers/projectService.controller');

router.post('/', projectServiceController.createProjectService);
router.get('/', projectServiceController.getAllProjectServices);
router.get('/:id', projectServiceController.getProjectServiceById);
router.put('/:id', projectServiceController.updateProjectService);
router.delete('/:id', projectServiceController.deleteProjectService);

module.exports = router; 