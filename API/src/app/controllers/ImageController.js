const { Images } = require('../models')

class ImageController {
  async store (req, res) {
    const { filename } = req.file

    const imagem = await Images.create({ ...req.body, imagem: filename })

    return res.json(imagem)
  }
}

module.exports = new ImageController()
