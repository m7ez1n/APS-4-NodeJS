const { Images } = require('../models')
const Mail = require('../../lib/mail')
const { User } = require('../models')

class ImageController {
  async index (req, res) {
    const file = await Images.findAll()

    const ordenationFile = file.slice().sort()

    return res.json(ordenationFile)
  }

  async store (req, res) {
    const { filename: images } = req.file

    const file = await Images.create({
      images
    })
    const user = await User.findByPk(req.userId)

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Nova imagem enviada',
      template: 'send',
      context: {
        name: user.name,
        image: file.images
      }
    })

    return res.json(file)
  }
}

module.exports = new ImageController()
