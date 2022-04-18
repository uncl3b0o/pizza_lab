const express = require('express');
const router = express.Router();
const checkoutController = require('../app/controllers/CheckOutController');


router.get('/',checkoutController.getCart)
router.post('/', checkoutController.cartPost);
router.post('/infopost', checkoutController.infoPost);

module.exports = router;