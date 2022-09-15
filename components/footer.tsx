import React from "react";
import Link from "next/link";
import FacebookIcon from "../public/facebook.svg"
import InstagramIcon from "../public/instagram.svg"

export const Footer = ({ data }) => {
  return (
      <div className="bg-primary text-white z-20 relative px-5">
        <div className="flex flex-col md:flex-row md:max-w-screen-xl justify-center md:mx-auto items-start py-10 md:py-16 md:gap-20">
          <div className="flex flex-col">
            <div className="font-serif text-3xl ">
              Frédéric Chastelas
            </div>
            <div>
              12 rue Amoreux<br/>
              34090 MONTPELLIER<br/>
              06 84 77 55 44<br/>
              frederic.chastelas@gmail.com
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
          <hr className="opacity-30 md:hidden mt-4 w-full "/>
          <div >
            <ul className="space-y-2 pb-4 pt-4 md:pt-0">
              <li><a href="/politique-de-confidentialite">Politique de confidentialite</a></li>
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
  )
}


