const express = require('express/lib/response');
const Pizza =  require('../models/Pizza')
const { mongooseArray } = require('../../util/mongoose')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class menuController {
    //[GET]/menu/foodDetail
async detailPizza(req, res, next) {
    const pizzas = await Pizza.findById(req.params.id)
    res.render('menus/foodDetail',{ pizzas: mongooseArray(pizzas) });
    }


     //[GET]/menu
async index(req, res,next){
    const pizzaId = "623ddc4c029284681eb9064c";
    const pizzas = await Pizza.find({typeId:pizzaId});
    res.render('menu',{pizzas:mutipleMongooseToObject(pizzas)});
}

async postPizza(req,res,next){
    const pizzaId = "623ddc4c029284681eb9064c";
    const pizzas = await Pizza.find({typeId:pizzaId});
    res.render('menu',{pizzas:mutipleMongooseToObject(pizzas)});
}

async postDrinks (req,res,next){
    const drinkId = "623ddc5f029284681eb9064d";
    const drinks = await Pizza.find({typeId:drinkId});
    res.render('menu',{drinks:mutipleMongooseToObject(drinks)});
}


async searchFeature (req,res,next) {
   const {q} = req.query;
   const menu = await Pizza.find();
   const menuFilter = menu.filter((item)=>item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
   res.render('menu',{pizzas:mutipleMongooseToObject(menuFilter)});
}
       
}
module.exports = new menuController();