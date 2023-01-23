const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    asin: String,
    title:String,
    description:String, 
    url:String,
    image:String,
    url:String,
    total_reviews: Number,
    ratting: Number,
    discounted: Boolean,
    current_price: Number,
    currency: String,
    savings_amount: Number,
    savings_percent: Number,
    sponsored: Boolean,
    amazonChoice: Boolean,
    bestSeller: Boolean,
    amazonPrime: Boolean,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
});
ProductSchema.plugin( mongoosePaginate );

module.exports = mongoose.model('Products', ProductSchema, 'Products');
