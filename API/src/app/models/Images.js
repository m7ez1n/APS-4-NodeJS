module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    imagem: DataTypes.STRING
  })

  return Images
}
