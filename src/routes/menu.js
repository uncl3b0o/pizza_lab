const express = require('express');
const router = express.Router();
const menuController = require('../app/controllers/MenuController');



router.get('/', menuController.index);
router.post('/pizzas',menuController.postPizza)
router.post('/drinks',menuController.postDrinks)
router.get('/search',menuController.searchFeature)
router.get('/:id', menuController.detailPizza);



module.exports = router;