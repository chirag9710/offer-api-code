const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content:String, 
    description:String, 
	  userId: {
      type: Schema.ObjectId,
      ref: 'User'
    },
	  reactedUsers: [{
      type: Schema.ObjectId,
      ref: 'User'
    }],
	  commentedUsers: [{
      type: Schema.ObjectId,
      ref: 'User'
    }],
    createdAt: {
      type: Date,
      default: Date.now
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    reactionCount: {
      type: Number,
      default: 0
    },
    // dislikes: {
    //   type: Number,
    //   default: 0
    // },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    tags: [{
      type: String,
    }],
    link: {
      type: String,
    }
    
});
PostSchema.plugin( mongoosePaginate );

module.exports = mongoose.model('Post', PostSchema, 'Post');
