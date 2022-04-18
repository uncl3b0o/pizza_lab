const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');


router.get('/',cartController.getCart)
router.post('/', cartController.cartPost);

module.exports = router;