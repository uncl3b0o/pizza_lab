const express = require('express/lib/response');
const Pizza =  require('../models/Pizza')
const { mongooseArray } = require('../../util/mongoose')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class homeController {
    //[GET] /
   //  showHome(req, res, next) {
   //     res.render('home');
   //  } 
    showHome(req, res,next){
      Pizza.find()
      .then(pizzas => {
          res.render('home',{ 
              pizzas:  mutipleMongooseToObject(pizzas) 
          });
      })  
          
      .catch(next);
   }
 }
 
 module.exports = new homeController();