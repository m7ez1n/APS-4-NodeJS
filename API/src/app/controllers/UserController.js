const { User } = require('../models')

class UserController {
  async index (req, res) {
    const users = await User.find()

    return res.json(users)
  }

  async show (req, res) {
    const user = await User.findById(req.params.id)

    return res.json(user)
  }

  async store (req, res) {
    const user = await User.create(req.body)

    return res.json(user)
  }

  async update (req, res) {
    const user = await User.find(req.params.id)

    const data = res.only(['name', 'email'])

    user.merge(data)
    await user.save()

    return res.json(user)
  }

  async destroy (req, res) {
    const user = await User.find(req.params.id)

    await user.delete()

    return res.send()
  }
}

module.exports = new UserController()
