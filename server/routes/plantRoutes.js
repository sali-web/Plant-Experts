const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');



router.get('/',plantController.homepage);
router.get('/categories',plantController.exploreCategories);
router.get('/caretips/:id',plantController.exploreCareTips);
router.get('/categories/:id', plantController.exploreCategoriesById);
router.post('/search', plantController.searchCareTips);
module.exports = router;


