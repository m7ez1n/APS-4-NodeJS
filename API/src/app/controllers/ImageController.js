const { Images } = require('../models')

class ImageController {
  async store (req, res) {
    const { filename: images } = req.file

    const file = await Images.create({
      images
    })

    return res.json(file)
  }
}

module.exports = new ImageController()
