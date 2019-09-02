const { Images } = require('../models')
const Queue = require('../../lib/Queue')
const { User } = require('../models')
const SendMail = require('../jobs/SendMail')

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

    await Queue.add(SendMail.key, {
      user,
      file
    })

    return res.json(file)
  }
}

module.exports = new ImageController()
