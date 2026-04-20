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

export type SpamNotificationFields = {
    reason: string
    formData: FormData
}

export const SpamNotificationEmail: Email<SpamNotificationFields> = ({ reason, formData }) => ({
    subject: `🚫 Spam détecté sur le formulaire de contact Troglos`,
    body: (
        <body style={bodyStyle}>
            <h1 style={{ textAlign: 'center', color: '#dc2626' }}>Spam détecté</h1>
            <div>
                <p>
                    <b>Raison du blocage :</b> {reason}
                </p>
                <hr />
                <h2>Contenu du formulaire</h2>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                    {Array.from(formData.entries()).map(([key, value]) => (
                        <li key={key}>
                            <b>{key}</b> : {String(value) || '(vide)'}
                        </li>
                    ))}
                    <li><b>Temps de soumission :</b> {Date.now() - parseInt(formData.get('timestamp') as string, 10)} ms</li>
                </ul>
            </div>
        </body>
    ),
})
