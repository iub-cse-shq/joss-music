var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SongSchema = {

  songname: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,

  },
  
  artist: {
    type: Number,
    default: '',
    required: 'price required'

  },
  
  genre: {
    type: Number,
    default: '',
    required: 'Quantity required'

  },

  imageSong: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  song: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;