const express = require('express');
const userRoutes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Require Post model in our routes module
let User = require('./user.model').User;
let initUser= require('./user.model').initUser;

// Defined store route
userRoutes.route('/sign/add').post(function (req, res) {
  let user = new User(req.body);
  User.findOne({username:user.username})
  .then(user=>{
    if(user){
      res.status(409).json(`${user.username} already in db`);
    }
    else{
      // console.log(req.body);
      let user = new User(req.body);
      bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        else{
          const newUser = new User(initUser(user.username,user.email, hash));
          newUser.save()
          .then(() =>{
            res.status(200).json({'user': 'user in added successfully'});
          })
          .catch(() => {
            res.status(401).send("unable to save to database");
          });
        }  
      })
    }
  })
  .catch(() => {
    res.status(403).send("unable to save to database");
  });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function(err, users){
    if(err){
      res.json(err);
    }
    else {
      res.json(users);
    }
  });
});
userRoutes.route('/login').post(function(req, res){
  let user_valid = new User(req.body);
  User.findOne({ email:user_valid.email})
  .then(user =>{
    if(user===null){
      res.status(401).json({
        msg: "auth failed, user not in DB",
        token: null,
        email: null
      });
    }
    else{
      let user_valid = new User(req.body);
      bcrypt.compare(user_valid.password, user.password)
      .then(check_state => {
        if (check_state) {
          jwt.sign(
            { username: user_valid.username, userID: user_valid._id },
            'shhhhh',
            { expiresIn: "1 day" },
            (err, jwttoken) => {
              if (err) {
                res.status(400).json({
                  msg: "auth failed err in jwt.sign()",
                  token: null,
                  eamil: null
                });
              } 
              else {
                console.log(jwttoken);
                res.json({
                  msg: "auth ok",
                  token: jwttoken,
                  email: user_valid.email,
                  success:true
                });
              }
            }
          );
          // console.log(user_valid);
          // console.log(jwttoken);
        }
        else{
          res.status(402).json({
            msg: "auth failed, passwords mismatch",
            token: null,
            email: null
          });
        }
      })
    }
  })
  .catch(err =>
    res
      .status(401)
      .json({ msg: "auth failed in find", token: null, email: null })
  );
});

// Defined edit route
// postRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Post.findById(id, function (err, post){
//       if(err) {
//         res.json(err);
//       }
//       res.json(post);
//   });
// });

//  Defined update route
// postRoutes.route('/update/:id').post(function (req, res) {
//     Post.findById(req.params.id, function(err, post) {
//     if (!post)
//       res.status(404).send("data is not found");
//     else {
//         post.title = req.body.title;
//         post.body = req.body.body;
//         post.save().then(() => {
//           res.json('Update complete');
//       })
//       .catch(() => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// Defined delete | remove | destroy route
// postRoutes.route('/delete/:id').delete(function (req, res) {
//     Post.findByIdAndRemove({_id: req.params.id}, function(err){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = userRoutes;