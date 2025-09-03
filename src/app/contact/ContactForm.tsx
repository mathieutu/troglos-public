'use client'

import Form from 'next/form'
import { useActionState } from 'react'

type State = 'success' | 'error' | null
export const ContactForm = ({
  sendEmailAction,
}: {
  sendEmailAction: Parameters<typeof useActionState<State, FormData>>[0]
}) => {
  const [state, formAction, pending] = useActionState(sendEmailAction, null)

  return (
    <Form action={formAction} className="space-y-6">
      {state === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Message envoyé !</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Nous reviendrons vers toi dès que possible.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V7a1 1 0 112 0v2a1 1 0 11-2 0zm0 4a1 1 0 112 0 1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Erreur lors de l'envoi du message
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Une erreur est survenue. Merci de nous contacter directement par email à
                  contact@troglos.fr.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
          Nom*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="focus:ring-primary-500 w-full rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="focus:ring-primary-500 w-full rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="focus:ring-primary-500 w-full rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="focus:ring-primary-500 w-full resize-none rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="hover:bg-primary-600 focus:ring-primary-500 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-gray-600 px-6 py-3 font-medium text-white transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
        >
          {pending && (
            <span
              aria-hidden="true"
              className="mr-3 -ml-1 inline-block h-5 w-5 animate-spin rounded-full border-2 border-transparent border-l-white"
            />
          )}
          Envoyer le message
        </button>
      </div>
    </Form>
  )
}
