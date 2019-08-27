const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

// CRUD User
routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.show)
routes.post('/user', UserController.store)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.destroy)

// Session
routes.post('/sessions', SessionController.store)

routes.post('/app/images', upload.single('image'), (req, res) => {
  return res.json({ ok: true })
})

module.exports = routes
