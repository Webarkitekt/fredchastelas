import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Hero } from "./blocks/hero";
import { Introduction } from "./blocks/introduction";
import { Feature } from "./blocks/feature";
import { TextAndImage } from "./blocks/text-and-image";

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
          switch (block.__typename) {
            case "PagesBlocksHero":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Hero data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PagesBlocksIntroduction":
              return (
                  <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                  >
                    <Introduction data={block} parentField={`blocks.${i}`} />
                  </div>
              );
            case "PagesBlocksFeature":
              return (
                  <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                  >
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
              );
              case "PagesBlocksTextAndImage":
                return (
                    <div
                        data-tinafield={`blocks.${i}`}
                        key={i + block.__typename}
                    >
                      <TextAndImage data={block} parentField={`blocks.${i}`} />
                    </div>
                );
            default:
              return null;
          }
        })
        : null}
    </>
  );
};
