import * as React from 'react'
import type { TinaTemplate } from "tinacms";
import HeroGraphic from '../../public/hero-graphic.svg'

export const Hero = ({ data, parentField }) => {
  return(
    <div className="bg-secondary h-screen lg:h-[30rem] mb-20 relative overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0 text-white">
          <HeroGraphic/>
        </div>
      </div>
      <div className="relative flex flex-col h-full ">
        <div className="max-w-screen-2xl mx-auto flex-grow w-full">
      <div className=" h-full w-full flex flex-col place-content-center ">
        <div className="lg:w-10/12 mx-5 lg:mx-auto text-gray-700">
          <h1 data-tinafield={`${parentField}.headline`}
              className="font-serif  text-6xl lg:text-8xl mb-12 leading-[1.4]]">
            {data.headline}
          </h1>
          <h2 data-tinafield={`${parentField}.tagline`}
              className="font-light text-xl">
            {data.tagline}
          </h2>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}


export const heroBlockSchema : TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      headline: "Hero",
      tagline: "Tagline"
    }
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    }
  ]
}
