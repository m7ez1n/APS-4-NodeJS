const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/user', UserController.index)
routes.post('/user', guestMiddleware, UserController.store)
routes.get('/user/:id', UserController.show)

routes.post('/signin', guestMiddleware, SessionController.store)

routes.use('/app', authMiddleware)

routes.get('app/logout', SessionController.destroy)
routes.put('app/user/:id', UserController.update)
routes.delete('app/user/:id', UserController.destroy)

module.exports = routes
