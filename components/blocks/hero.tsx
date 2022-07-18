import * as React from 'react'
import type { TinaTemplate } from "tinacms";
import HeroGraphic from '../../public/hero-graphic.svg'

export const Hero = ({ data, parentField }) => {
  return(
    <div className="bg-secondary h-screen lg:h-[30rem] relative overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute z-10 right-0 bottom-0 text-white">
          <HeroGraphic/>
        </div>
      </div>
      {data?.image?.src &&
          <div className={"absolute inset-0 bg "}>
            <img className={"h-full w-full object-cover"} src={data.image.src} alt={data.image.alt}/>
          </div>
      }
      <div className="relative flex flex-col h-full ">
        <div className="max-w-screen-2xl mx-auto flex-grow w-full">
      <div className=" h-full w-full flex flex-col place-content-start mt-16 ">
        <div className="lg:w-10/12 mx-5 lg:mx-auto text-white">
          <h1 data-tinafield={`${parentField}.headline`}
              className="font-serif  text-5xl lg:text-7xl mb-3 leading-[1.4]]">
            {data.headline}
          </h1>
          <h2 data-tinafield={`${parentField}.tagline`}
              className="font-light text-2xl text-white bg-blend-lighten inline">
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
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
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
