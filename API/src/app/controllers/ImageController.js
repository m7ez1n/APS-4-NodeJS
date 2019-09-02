const { Images } = require('../models')

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

    return res.json(file)
  }
}

module.exports = new ImageController()
