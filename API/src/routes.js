const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const ImageController = require('./app/controllers/ImageController')

const authMiddleware = require('./app/middlewares/auth')

// CRUD User
routes.post('/user', UserController.store)
// Session
routes.post('/sessions', SessionController.store)

// usando o middleware
routes.use(authMiddleware)

routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.show)
routes.put('/user', UserController.update)
routes.delete('/user/:id', UserController.destroy)

routes.post('/app/images', upload.single('image'), ImageController.store)

module.exports = routes
