'use server'

import { Mailer } from 'nodemailer-react'
import { ContactEmail, type ContactFields } from '@/components/ContactEmail'

const { MAIL_USERNAME, MAIL_PASSWORD } = process.env

if (!MAIL_USERNAME || !MAIL_PASSWORD) {
  throw new Error('Mail env vars needed (MAIL_USERNAME, MAIL_PASSWORD).')
}

const mailer = Mailer(
  {
    transport: {
      // SMTP For dev
      // host: MAIL_HOST,
      // port: Number(MAIL_PORT),
      service: 'gmail',
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
    },
    defaults: {
      from: { name: 'Site Troglos', address: 'admin@troglos.fr' },
    },
  },
  {
    ContactEmail,
  }
)

export const sendContactEmail = async (contact: ContactFields) =>
  mailer.send('ContactEmail', contact, { to: 'mathieu@troglos.fr', replyTo: contact.email })
