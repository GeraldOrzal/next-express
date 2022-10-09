const passport = require('passport');
module.exports = (req, res, next)=>{
    passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect(`/login?err=${info.message}`);
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect("/auth/");
        });
    })(req, res, next);
};