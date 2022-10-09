const bcrypt = require('bcrypt');
const Users = require('../../models/users');
module.exports = (req, res, next) => {
    bcrypt.hash(req.body.password, 32, function (err, hashedPassword) {
        if (err) { return next(err); }
        Users.insertUser(req.body.username,hashedPassword,function (err,result) {
            if (err) { return next(err); }
            var user = {
                id: this.lastID,
                username: req.body.username
            };
            req.login(user, function (err) {
                if (err) { return next(err); }
                res.redirect('/');
            });
        })
        
    });
}