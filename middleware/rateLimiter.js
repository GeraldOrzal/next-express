const {RateLimiterMySQL} = require('rate-limiter-flexible');
const connection = require('../config/connection');

const opts = {
    storeClient: connection,
    dbName: process.env.DB_NAME,
    tableName: 'limiters', // all limiters store data in one table
    points: 10, // Number of points
    duration: 1, // Per second(s)
};
const ready = (err) => {
    if (err) {
     
    } else {
      
    }
};
const rateLimiter = new RateLimiterMySQL(opts, ready);

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter.consume(req.ip)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(429).send('Too Many Requests');
    });
};

module.exports = rateLimiterMiddleware;