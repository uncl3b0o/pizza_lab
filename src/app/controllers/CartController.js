const express = require('express/lib/response');
const Pizza =  require('../models/Pizza')
const Sessions = require('../models/Session')
const { mongooseArray } = require('../../util/mongoose')

class CartController {
   async getCart(req,res,next){

        const sessions = await Sessions.findById(req.signedCookies.sessionId).populate('cart._id').lean();
        const total = sessions.cart.reduce((a,b)=>a+b.total,0)
        res.render('cart',{sessions:sessions,total})
   }

    async cartPost(req,res,next){
        const{id,qty}=req.body;
        const pizza = await Pizza.findById(id);
        const session = await Sessions.findById(req.signedCookies.sessionId);
        const findExisted = session.cart.find((item)=>item._id == id)

        if(findExisted !== undefined){
            let subDoc = session.cart.id(id);
            subDoc.set({qty:subDoc.qty+1});
            subDoc.set({total:pizza.cost * subDoc.qty});
            await session.save();
        }else{
            await Sessions.updateOne({_id:session},{
                $push: {
                    cart: { _id:id ,qty,total:pizza.cost*qty},
                },
            });
        }
        res.redirect('/menu')
    }

}
module.exports = new CartController();