module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'm7',
  password: 'docker',
  MYSQL_ROOT_PASSWORD: 'docker',
  port: 3306,
  database: 'aps',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
