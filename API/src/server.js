const express = require('express')
const session = require('express-session')
const LokiStore = require('connect-loki')(session)
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(
      session({
        name: 'root',
        secret: 'APS',
        resave: false,
        store: new LokiStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions.db')
        }),
        saveUninitialized: true
      })
    )
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
