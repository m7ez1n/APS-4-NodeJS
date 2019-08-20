const { User } = require('../models')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      console.log('Usuário não encontrado')
      return res.redirect('/signin')
    }

    if (!(await user.checkPassword(password))) {
      console.log('Senha incorreta')
      return res.redirect('/signin')
    }

    req.session.user = user

    return res.redirect('/app/dashboard')
  }

  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/signin')
    })
  }
}

module.exports = new SessionController()
