
const bcrypt = require('bcrypt');
const Users = require('../models/users');
const LocalStrategy = require('passport-local').Strategy
module.exports = passport => {
  
  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.userid, username: user.username });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });
  passport.use(new LocalStrategy(function verify(username, password, cb) {
    Users.getUserByUsername(username,(err,row)=>{
      if (err) { return cb(err); }
      if (row.length==0) { return cb(null, false, { message: 'Incorrect username or password.' }); }
    
        if (err) { return cb(err); }
        bcrypt.compare(password, row[0].hashed_password).then((value)=>{
          if (!value) {
            return cb(null, false, { message: 'Incorrect username or password.' });
          }
            return cb(null, row);
        })
    });
    
  }));
 
}