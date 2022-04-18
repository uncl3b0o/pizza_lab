const Pizza = require("./Pizza");
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);



const Customers = new Schema(
    {
        fullname: { type: String, required: true },
        mail: {type: String, required: true},
        phone: {type: String, required: true},
        address: { type: String, required: true },
    }
    ,{
		timestamps: true,
	}
)

module.exports = mongoose.model('customers', Customers);