const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.post('/signin', SessionController.store)

routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.show)
routes.post('/user', UserController.store)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.destroy)

module.exports = routes
