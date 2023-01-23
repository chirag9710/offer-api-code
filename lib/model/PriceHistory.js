const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const Schema = mongoose.Schema;

const PriceHistorySchema = new Schema({
    asin: String,
    price: Number,
    date: {
      type: Date,
      default: Date.now
    },
    
});
PriceHistorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('PriceHistory', PriceHistorySchema,'PriceHistory');
