import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/Card'
import { Link } from '@/components/Link'
import contactBanner from '@/assets/images/photos/other_04.jpg'
import { ContactForm } from '@/app/contact/ContactForm'
import { sendContactEmail, sendSpamNotification } from '@/services/mailer'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'
import { ContactFields } from '@/components/ContactEmail'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description:
    'Contactez le Clan Spéléo des Troglodytes. Trouvez nos coordonnées, notre adresse et envoyez-nous un message pour toute question sur nos activités.',
  path: '/contact',
  keywords: ['contact', 'adresse', 'téléphone', 'email', 'local', 'Lyon'],
})

const SPAM_KEYWORDS = [
  // Marketing / SEO
  'seo', 'marketing', 'backlink', 'traffic', 'lead generation', 'guest post',
  'link building', 'cold email', 'mass email', 'outreach', 'ranking', 'serp',
  // Sales pitch
  'buy now', 'act now', 'click here', 'limited offer', 'free quote', 'free trial',
  'no monthly', 'subscription', 'dashboard', 'submit your', 'classified',
  'one payment', 'no experience required', 'endless possibilities',
  // Crypto / Finance
  'crypto', 'bitcoin', 'blockchain', 'forex', 'trading', 'investment opportunity',
  // Pharma / Casino
  'casino', 'viagra', 'cialis', 'lottery', 'winner', 'prize',
  // AI / Tech spam
  'ai tool', 'ai service', 'chatgpt', 'gemini', 'stable diffusion', 'cohere',
  'leonardo ai', 'artificial intelligence', 'machine learning', 'automation service',
  'ai-powered', 'ai model', 'api key',
  // Web services
  'web design', 'web development', 'social media', 'digital marketing',
  // Generic English words with no relation to speleology/canyoning
  'free', 'tools', 'business', 'website', 'automation', 'software',
  // English spam patterns
  'boost', 'booster', 'submitter', 'unlimited', 'monetize', 'revenue',
  'affordable', 'discount', 'promo', 'testimonial', 'roi',
  'unsubscribe', 'opt-out', 'brightdata', 'shopify', 'saas', 'startup',
  'freelancer', 'outsource', 'offshore', 'wholesale',
]

function detectSpam({ name, email, message, phone }: ContactFields): string | null {
  const text = `${name} ${message}`.toLowerCase()

  // Check for URLs (with or without protocol)
  const urlPatterns = [
    /https?:\/\//g,      // http:// or https://
    /www\./g,             // www.
    /\w+\.[a-z]{2,}/g,    // domain like example.com
  ]
  let urlCount = 0
  for (const pattern of urlPatterns) {
    urlCount += (text.match(pattern) || []).length
  }
  if (urlCount > 2) {
    return `too many URLs (${urlCount})`
  }

  // Check for spam keywords (word boundary matching to catch variations)
  const foundKeywords = SPAM_KEYWORDS.filter((kw) => new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text))
  if (foundKeywords.length) {
    return `spam keywords found: ${foundKeywords.join(', ')}`
  }

  const allowedPhonePatterns = [
    /^0[\s.\-]?[1-9]([\s.\-]?\d{2}){4}$/, // French local format (0X XX XX XX XX)
    /^\+\d{1,3}[\s.\-]?\d[\s.\-\d]{6,14}$/, // International format (+XX ...)
  ]
  if (phone && !allowedPhonePatterns.some((pattern) => pattern.test(phone))) {
    return `suspicious phone number: ${phone}`
  }
  // Detect predominantly English messages (heuristic: check for common French words/patterns)
  // A message to a French speleology club should contain some French
  const frenchIndicators = [
    /[àâäéèêëïîôùûüÿçœæ]/i,
    /\b(je|tu|il|elle|nous|vous|ils|elles|le|la|les|un|une|des|du|de|et|est|sont|dans|pour|avec|sur|pas|que|qui|mais|cette|mon|ton|son|notre|votre|leur|bonjour|merci|salut|cordialement|bien|aussi)\b/i,
  ]
  const hasFrenchContent = frenchIndicators.some((pattern) => pattern.test(text))

  // If no French content detected and message is long enough, likely spam
  if (!hasFrenchContent && text.length > 100) {
    return 'no French content detected in a long message'
  }

  // Check for suspicious email patterns (many spam emails use unusual TLDs)
  const suspiciousTlds = ['.xyz', '.top', '.buzz', '.click', '.link', '.site', '.online', '.icu', '.club']
  const emailLower = email.toLowerCase()
  if (suspiciousTlds.some((tld) => emailLower.endsWith(tld))) {
    return `suspicious email TLD: ${email}`
  }

  return null
}

export default function ContactPage() {
  const sendEmailAction = async (_currentState: unknown, formData: FormData): Promise<'success' | 'error'> => {
    'use server'

    const notifySpam = async (reason: string) => {
      console.warn(`Spam detected: ${reason}`)
      await sendSpamNotification({ reason, formData }).catch((err) =>
        console.error('Failed to send spam notification:', err)
      )
    }

    // Honeypot validation - reject if any hidden field is filled
    const honeypotFields = ['website', 'company', 'url']
    for (const field of honeypotFields) {
      if (formData.get(field)) {
        await notifySpam(`honeypot field "${field}" was filled`)
        return 'error'
      }
    }

    // Time-based spam detection - reject if form submitted too quickly
    const timestamp = formData.get('timestamp') as string
    const submittedAt = parseInt(timestamp, 10)
    const submissionTime = Date.now() - submittedAt

    const MIN_SUBMISSION_TIME = 10000 // 10 seconds
    if (submissionTime < MIN_SUBMISSION_TIME) {
      await notifySpam(`form submitted too quickly (${submissionTime}ms)`)
      return 'error'
    }

    const emailFields = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      debug: {
        honeypots: Object.fromEntries(
          honeypotFields.map((field) => [field, (formData.get(field) as string) || ''])
        ),
        submissionTime,
      },
    }

    // Content-based spam filtering
    const spamResult = detectSpam(emailFields)
    if (spamResult) {
      await notifySpam(spamResult)
      return 'error'
    }

    try {
      await sendContactEmail(emailFields)
      return 'success'
    } catch (error) {
      console.error('Failed to send contact email:', error)
      return 'error'
    }
  }

  return (
    <>
      <PageHeader imageSrc={contactBanner} title="Nous contacter" />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-12">
          <section className="mb-16">
            <div>
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Section des coordonnées */}
                <div className="space-y-8">
                  <div>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Tu as des questions&nbsp;? Tu souhaites nous rejoindre&nbsp;? N&apos;hésite
                      pas à nous contacter&nbsp;!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-600">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <Link href="https://maps.app.goo.gl/ezzbEnmuuSUmBYtr6" className="group">
                          <p className="group-hover:text-primary-500 font-medium text-white transition-colors">
                            Clan Spéléo des Troglodytes
                          </p>
                          <p className="group-hover:text-primary-500 text-gray-300 transition-colors">
                            18 Rue Volney, 69008 Lyon
                          </p>
                        </Link>
                        <p>
                          <Link
                            className="hover:text-primary-500"
                            href="https://drive.google.com/file/d/1bjQF-UEYVml_HuTRQDqta7OFSh7-J9tT/view"
                          >
                            🗺️{' '}
                            <span className="underline decoration-dotted">
                              Voir le plan d'accès
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-600">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <Link
                              href="mailto:initiations@troglos.fr"
                              className="hover:text-primary-500 text-white transition-colors"
                            >
                              <strong>initiations</strong>@troglos.fr
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="mailto:contact@troglos.fr"
                              className="hover:text-primary-500 text-white transition-colors"
                            >
                              <strong>contact</strong>@troglos.fr
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section du formulaire */}
                <div className="space-y-6">
                  <ContactForm sendEmailAction={sendEmailAction} />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Où nous croiser ?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card
                title="Entrainement hebdomadaire"
                icon="🪢"
                style={{
                  '--card-bg': 'var(--color-purple-300)',
                  '--card-border': 'var(--color-purple-500)',
                }}
              >
                <p>
                  Sous réserve d'encadrants, nous proposons des entraînements à la progression sur
                  corde et à l'équipement <strong>tous les jeudis à 20h</strong>.
                </p>
                <p>
                  Ils ont lieu dans le Gymnase Nelson Paillou à Moulin à Vent, et nécessitent de
                  réserver sa place au préalable.
                </p>
                <p>
                  Ces entraînements sont ouverts aux débutant·e·s ou confirmé·e·s, et permettent de
                  se perfectionner dans un cadre convivial.
                </p>
              </Card>
              <Card
                title="Réunions mensuelles"
                icon="📅"
                style={{
                  '--card-bg': 'var(--color-pink-300)',
                  '--card-border': 'var(--color-pink-500)',
                }}
              >
                <p>
                  Rejoins-nous pour nos réunions chaque premier mercredi du mois à 20h30 au local du
                  club (18 rue Volney, 69008 Lyon). C'est l'occasion idéale pour découvrir la vie du
                  clan et être tenu·e au courant des prochaines sorties !
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
