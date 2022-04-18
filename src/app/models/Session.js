const Pizza = require("./Pizza");
const mongoose = require('mongoose');  
const { Schema } = mongoose;


const Sessions = new mongoose.Schema(
    // thiết kế cái cart đi để coi cái view của m
    {
        cart: [{
            _id:{type:Schema.Types.ObjectId ,ref:"pizzas"},
            qty:Number,
            total:Number
        }]
        // danh sách sản phẩm => cart [ {id:1},qty:10, total:100} , {id:2},qty:10, total:100}]
        // Mỗi object trong array đại diện cho 1 sản phẩm , bao gồm số lượng  , total = số lượng * giá sản phẩm
        // total đó chỉ đại diện cho tổng tiền của 1 sản phẩm
        // Phân tích database ở đây có 1 góc nhìn khác hơn sql
    }
    ,{
		timestamps: true,
		collection: "sessions",
		versionKey: false,
	}
)

module.exports = mongoose.model('sessions', Sessions);