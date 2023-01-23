const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const Schema = mongoose.Schema;

/**   position": {
        "page": 1,
        "position": 18,
        "global_position": 18
      },
      "asin": "B073XJM2PJ",
      "price": {
        "discounted": false,
        "current_price": 49.98,
        "currency": "EUR",
        "before_price": 0,
        "savings_amount": 0,
        "savings_percent": 0
      },
      "reviews": {
        "total_reviews": 5540,
        "rating": 4.8
      },
      "url": "https://www.amazon.de/dp/B073XJM2PJ",
      "score": "26592.00",
      "sponsored": false,
      "amazonChoice": false,
      "bestSeller": false,
      "amazonPrime": false,
      "title": "Sponsored Ad – Bestand Aluminium Stand for Laptop and MacBook Desktop for Apple MacBook and All Laptops Grey (Patented)",
      "thumbnail": "https://m.media-amazon.com/images/I/71sIqqf-MlL._AC_UY218_.jpg"
       */

const ProductSchema = new Schema({
    content:String, 
    description:String, 
	  asin: String,
   
    url:String,
    image:String,
    title:String,
    url:String,
   
    
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

module.exports = mongoose.model('Post', ProductSchema, 'Post');
