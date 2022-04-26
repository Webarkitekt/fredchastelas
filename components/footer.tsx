import React from "react";
import Link from "next/link";

export const Footer = ({ data }) => {
  return (
      <div className="bg-primary text-white z-20 relative px-5">
        <div className="flex lg:max-w-screen-xl lg:mx-auto items-start py-10 lg:py-16 gap-20">
          <div className="font-serif text-3xl ">
            Frédéric Chastelas
          </div>
          <div>
            <ul className="space-y-2 hidden lg:block">
              <li><a href="">Séminaires et cours de méditation</a></li>
              <li><a href="">Régulation émotionelle Tipi</a></li>
              <li><a href="">Accompagnement</a></li>
              <li><a href="">Coaching en entreprise</a></li>
              <li><a href="">A propos</a></li>

            </ul>
          </div>
        </div>
      </div>
  )
}


