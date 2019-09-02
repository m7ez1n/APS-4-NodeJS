const Mail = require('../../lib/mail')

class SendMail {
  get key () {
    return 'SendMail'
  }

  async handle ({ data }) {
    const { user, file } = data

    console.log('Ta funfando')

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Nova imagem enviada',
      template: 'send',
      context: {
        name: user.name,
        image: file.images
      }
    })
  }
}

module.exports = new SendMail()
