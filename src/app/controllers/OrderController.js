const express = require('express/lib/response');
const Pizza =  require('../models/Pizza');
const Sessions = require('../models/Session');
const Customers = require('../models/Customer');
const { mongooseArray } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class OrderController {
    
    async getCart(req,res,next){
        const sessions = await Sessions.findById(req.signedCookies.sessionId).populate('cart._id').lean();
        const total = sessions.cart.reduce((a,b)=>a+b.total,0)
        const customers = await Customers.findOne({})
        console.log(customers)
        res.render('order',{sessions:sessions,total,customers: mongooseArray(customers)})
   }

}
module.exports = new OrderController();