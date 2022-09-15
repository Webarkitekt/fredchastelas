import React, { useState } from 'react'
import { addToMailchimp } from '../utils'

export const EmailForm = () => {
    const [email, setEmail] = useState('')
    const [isEntering, setIsEntering] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addToMailchimp(email)
            .then((data: any) => {
                alert(data.msg)
            })
            .catch((error: Error) => {
                // Errors in here are client side
                // Mailchimp always returns a 200
                if (error.message === 'Timeout') {
                    alert(
                        'Looks like your browser is blocking this. Try to disable any tracker-blocking feature and resubmit.'
                    )
                }
                console.error(error)
            })
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEntering(true)
        setEmail(event.currentTarget.value)
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-5">
                <div className="bg-secondary py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-4xl font-serif tracking-tight text-gray-700">Inscrivez-vous à ma newsletter</h2>
                        <p className="mt-4 max-w-3xl text-lg text-gray-500">
                            Restez informé des prochains évènements en vous inscrivant à mon infolettre.
                        </p>
                    </div>
                    <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                        <form id="newsletter-signup"
                              onSubmit={handleSubmit}
                              className="sm:flex">
                            <input
                                placeholder="Saisir votre email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                onChange={handleEmailChange}
                                onFocus={handleEmailChange}
                                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-interaction-default focus:border-0"

                            />
                            <button
                                type="submit"
                                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-interaction-default px-5 py-3 text-base font-medium text-white hover:bg-interaction-default focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-interaction-default sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                                M'inscrire
                            </button>
                        </form>
                        <p className="mt-3 text-sm text-gray-500">
                            Nous nous soucions de la protection de vos données. Lire notre {' '}
                            <a href="/politique-de-confidentialite" className="font-medium text-interaction-default underline">
                                Politique de confidentialité
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
