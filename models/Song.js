var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SongSchema = {

  name: {
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
    type: String,
    default: '',
    

  },
  
  genre: {
    type: String,
    default: '',
  },
  
  link: {
    type: String,
    default: '',
  },
 
}

var Song = mongoose.model('Song', SongSchema, 'songs');
module.exports = Song;

