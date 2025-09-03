import { Email } from 'nodemailer-react'
import { CSSProperties } from 'react'

const bodyStyle: CSSProperties = {
  boxSizing: 'border-box',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  WebkitTextSizeAdjust: 'none',
  height: '100%',
  lineHeight: '1.4',
  margin: 'auto',
  width: '100% !important',
} as const

export type ContactFields = {
  name: string
  email: string
  phone?: string
  message: string
}

export const ContactEmail: Email<ContactFields> = (contact) => ({
  subject: 'Un nouveau message du site Troglos !',
  body: (
    <body style={bodyStyle}>
      <h1 style={{ textAlign: 'center' }}>Troglos</h1>
      <div>
        <p>Bonjour,</p>

        <p>Un nouveau message a été envoyé depuis le formulaire de contact du site Troglos :</p>
        <p />
        <ul style={{ padding: 0 }}>
          <li>
            <b>Nom</b> : {contact.name}
          </li>
          <li>
            <b>Email</b> : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          {contact.phone ? (
            <li>
              <b>Téléphone</b> : <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
          ) : null}
          <div style={{ marginTop: '1em', whiteSpace: 'pre-line' }}>{contact.message}</div>
        </ul>
      </div>
    </body>
  ),
})
