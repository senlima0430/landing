import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_GMAIL,
    pass: process.env.SENDER_PASS,
  },
})

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body

    const mail = {
      from: process.env.SENDER_GMAIL,
      to: process.env.SENSITIVE_MAIL,
      subject,
      text: `
        From email: ${email}

        ${message}
      `,
    }

    transporter.sendMail(mail, function (error, info) {
      if (error) {
        console.log(error)
        res.status(500).send('failed')
      } else {
        console.log(info)
        res.status(200).send('sent')
      }
    })
  }
}
