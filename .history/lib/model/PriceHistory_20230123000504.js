const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const Schema = mongoose.Schema;

const PriceHistorySchema = new Schema({
    asin: String,
    history:Schema.Types.DocumentArray,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
});
PriceHistorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('PriceHistory', PriceHistorySchema,'PriceHistory');
