module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    images: DataTypes.STRING
  })

  return Images
}
