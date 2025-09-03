'use server'

import { Mailer } from 'nodemailer-react'
import { ContactEmail, type ContactFields } from '@/components/ContactEmail'

const { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD } = process.env

if (!MAIL_HOST || !MAIL_PORT || !MAIL_USERNAME || !MAIL_PASSWORD) {
  throw new Error('Mail env vars needed (MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD).')
}

const mailer = Mailer(
  {
    transport: {
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
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
  mailer.send('ContactEmail', contact, { to: 'contact@troglos.fr', replyTo: contact.email })
