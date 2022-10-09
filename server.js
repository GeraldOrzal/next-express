const express = require('express')
const helmet = require('helmet')
const next = require('next')
const passport = require('passport');
require('dotenv').config();
require('./config/passport')(passport);
const session = require('express-session');
const sessionStore = require('./config/sessionStore');
const rateLimiterMiddleware = require('./middleware/rateLimiter');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(express.urlencoded({ extended: true }))
  server.use(express.json())
  if(process.env.APP_ENV == "production"){
    server.set('trust proxy', 1)
    server.disable('x-powered-by');
    server.use(helmet());
    server.use(rateLimiterMiddleware);
  }
  server.use(
    session({
      secret: process.env.MY_SECRET,
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
      cookie: {
        // secure: true,
        // httpOnly: true,
        // domain: process.env.DOMAIN_NAME,
        maxAge: 3600000, 
        sameSite: true
      }
    })
  )
  
  
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(require('./routes')(handle));
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
