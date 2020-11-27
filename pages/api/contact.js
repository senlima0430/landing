import nodemailer from 'nodemailer'
import { serialize } from 'cookie'

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

    if (message.length > 180) {
      res.status(500).send('failed')
    }

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
        res.status(500).send('failed')
      } else {
        res.setHeader(
          'Set-Cookie',
          serialize('sent', 'true', {
            path: '/',
            maxAge: 604800,
            sameSite: 'lax',
            httpOnly: true,
          })
        )
        res.status(200).send('sent')
      }
    })
  }
}
