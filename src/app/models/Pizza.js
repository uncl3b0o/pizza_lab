const mongoose = require('mongoose');  
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Pizza = new Schema ({
    
    image: { type: String },
    name: {type: String, required: true},
    description: {type: String},
    cost: { type: String },
    typeId: {type: String }
},{
    timestamps: true
})  

module.exports =mongoose.model('pizzas', Pizza);