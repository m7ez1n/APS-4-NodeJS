const { User } = require('../models')

class UserController {
  async index (req, res) {
    const users = await User.findAll()

    return res.json(users)
  }

  async show (req, res) {
    const user = await User.findByPk(req.params.id)

    return res.json(user)
  }

  async store (req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'Usuário ja existe' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async update (req, res) {
    const { email } = req.body

    const user = await User.findByPk(req.params.id)

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        return res.status(400).json({ error: 'Usuário ja existe' })
      }
    }

    const { id, name } = await user.update(req.body)

    return res.json({
      id,
      name,
      email
    })
  }

  async destroy (req, res) {
    const user = await User.findByPk(req.params.id)

    await user.destroy()

    return res.send()
  }
}

module.exports = new UserController()
