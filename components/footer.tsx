import React from "react";
import Link from "next/link";
import FacebookIcon from "../public/facebook.svg"
import InstagramIcon from "../public/instagram.svg"

export const Footer = ({ data }) => {
  return (
    <>
      {/* Pre-footer avec CTA */}
      <div className="bg-gray-100 py-12 px-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-700 mb-3">
              Prêt à commencer votre chemin ?
            </h2>
            <p className="text-base text-gray-500">
              Que ce soit pour un accompagnement individuel, un stage de méditation ou une intervention en entreprise,
              je serais heureux d'échanger avec vous.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-interaction-default text-white rounded-lg text-lg font-medium hover:scale-105 transition-transform duration-200 whitespace-nowrap"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="bg-primary text-white z-20 relative px-5">
        <div className="flex flex-col md:flex-row md:max-w-screen-xl justify-center md:mx-auto items-start py-10 md:py-16 md:gap-20">
          <div className="flex flex-col">
            <div className="font-serif text-3xl ">
              Frédéric Chastelas
            </div>
            <div>
              12 rue Amoreux<br />
              34090 MONTPELLIER<br />
              <a href="tel:+33684775544" className="hover:underline">06 84 77 55 44</a><br />
              <a href="mailto:frederic.chastelas@gmail.com" className="hover:underline">frederic.chastelas@gmail.com</a>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="space-y-2 ">
              <li><a href="/stages-et-cours">Stages et cours</a></li>
              <li><a href="/regulation-emotionnelle-tipi">Régulation émotionelle Tipi</a></li>
              <li><a href="/accompagnement">Accompagnement</a></li>
              <li><a href="/coaching-en-entreprise">Coaching en entreprise</a></li>
              <li><a href="/a-propos">A propos</a></li>
            </ul>

          </div>
          <hr className="opacity-30 md:hidden mt-4 w-full " />
          <div >
            <ul className="space-y-2 pb-4 pt-4 md:pt-0">
              <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
              <li><a href="/mentions-legales">Mentions légales</a></li>
            </ul>
            <hr className="opacity-30 hidden md:block" />
            <ul className="pt-4 space-x-4 flex flex-row ">
              <li className="w-8 h-8"><a href="https://www.facebook.com/frederic.chastelas.1" target="_blank"><FacebookIcon /> </a></li>
              <li className="w-8 h-8"><a href="https://www.instagram.com/fredericchastelas" target="_blank"><InstagramIcon /> </a></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}


