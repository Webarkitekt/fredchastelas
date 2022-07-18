import React, {useEffect, useState} from "react";
import type {Pages} from "../.tina/__generated__/types";
import {Hero} from "./blocks/hero";
import {Introduction} from "./blocks/introduction";
import {Feature} from "./blocks/feature";
import {TextAndImage} from "./blocks/text-and-image";
import {Content} from "./blocks/content";
import {EventsList} from "./blocks/eventsList";
import {client} from "../.tina/client";
import {EventsQuery} from "../.tina/__generated__/types";
import {useTina} from "tinacms/dist/edit-state";

export const Blocks = (props: Pages) => {

    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block, i) {
                    const nextBlock = i> 0 ? props.blocks[i+1] : null;

                    switch (block.__typename) {
                        case "PagesBlocksEvents":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <EventsList data={block} parentField={`blocks.${i}`}/>
                                </div>
                            );

                        case "PagesBlocksHero":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Hero data={block} parentField={`blocks.${i}`}/>
                                </div>
                            );
                        case "PagesBlocksIntroduction":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Introduction data={block} parentField={`blocks.${i}`}/>
                                </div>
                            );
                        case "PagesBlocksFeature":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Feature data={block} parentField={`blocks.${i}`}/>
                                </div>
                            );
                        case "PagesBlocksTextAndImage":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <TextAndImage data={block} parentField={`blocks.${i}`}/>
                                </div>
                            );
                        case "PagesBlocksContent":
                            let bottomSpacing
                            if ( nextBlock && (nextBlock.__typename === "PagesBlocksTextAndImage" || nextBlock.__typename === "PagesBlocksContent" )) {
                                bottomSpacing = nextBlock.bgColor === 'bg-secondary' ? "pb-24" : "";
                            } else if (i + 1 === props.blocks.length){
                                bottomSpacing = "pb-24"
                            }
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Content data={block} parentField={`blocks.${i}`} className={`${bottomSpacing}`}/>
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
