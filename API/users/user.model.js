const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let User = new Schema({
  username: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required:true

  }
},{
    collection: 'users'
});
const initUser=(username,email,hashedpassword) => {
  return{
    username:username,
    email:email,
    password:hashedpassword
  };
};
module.exports.User = mongoose.model('User', User);
module.exports.initUser = initUser; 