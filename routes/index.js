const login = require('./authentication/login');
const logout = require('./authentication/logout');

const router = require('express').Router();

module.exports = handle => {
    router.post('/login/password',login);
    router.post('/logout',logout);
    router.get("/register",(req,res,next)=>{
        if(req.isAuthenticated()){
            res.redirect("/auth");
        }
        next();
    });
    router.get("/login",(req,res,next)=>{
        if(req.isAuthenticated()){
            res.redirect("/auth");
        }
        next();
    });
    router.get(/auth/,(req,res,next)=>{
        if(!req.isAuthenticated()){
            res.redirect("/login");
        }
        next();
    });
    router.all('*', (req, res) => {
        return handle(req, res)
    })

    return router;
};
