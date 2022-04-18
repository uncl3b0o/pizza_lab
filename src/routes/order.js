const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController');

router.get('/',orderController.getCart);
// router.get('/',orderController.index);


module.exports = router;