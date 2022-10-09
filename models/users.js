const db = require('../config/connection');
module.exports ={
    getUser:(id,cb)=>{
        db.query('SELECT * FROM users WHERE userid = ?',[id],(err,res)=>{
            if(err){
                cb(err,null);
                return;
            }
            cb(null,res);
            
        });

    },
    getUserByUsername:(username,cb)=>{
        db.query('SELECT * FROM users WHERE username = ?',[username],(err,res)=>{
            if(err){
                cb(err,null);
                return;
            }
            cb(null,res);
        });
    },
    insertUser:(username,hashed_password,cb)=>{
        db.query('INSERT INTO users(`username`,`hashed_password`) VALUES (?,?)',[username,hashed_password],(err,res)=>{
            if(err){
                cb(err,null);
                return;
            }
            cb(null,res);
        });
    }

}