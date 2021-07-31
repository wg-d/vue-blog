const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  img:{
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);