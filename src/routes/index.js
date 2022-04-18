const homeRouter = require('./home');
const menuRouter = require('./menu');
const cartRouter = require('./cart');
const checkoutRouter = require('./checkout');
const orderRouter = require('./order');


function route(app) {
   app.use('/', homeRouter);
   app.use('/menu',menuRouter);
   app.use('/cart',cartRouter);
   app.use('/checkout',checkoutRouter);
   app.use('/order',orderRouter);
}

module.exports = route;