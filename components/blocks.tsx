import React, {useEffect, useState} from "react";
import type {Pages} from "../.tina/__generated__/types";
import {Hero} from "./blocks/hero";
import {Introduction} from "./blocks/introduction";
import {Feature} from "./blocks/feature";
import {TextAndImage} from "./blocks/text-and-image";
import {Content} from "./blocks/content";
import {EventsList} from "./blocks/eventsList";
import {Testimonials} from "./blocks/testimonials";
import {client} from "../.tina/client";
import {EventsQuery} from "../.tina/__generated__/types";
import {useTina} from "tinacms/dist/edit-state";

export const Blocks = (props: Pages) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block, i) {
                    const nextBlock = i < props.blocks.length ? props.blocks[i + 1] : null;
                    let bottomSpacing: string

                    if (nextBlock && (nextBlock.__typename === "PagesBlocksTextAndImage" || nextBlock.__typename === "PagesBlocksContent")) {
                        bottomSpacing = nextBlock.bgColor === 'bg-secondary' ? "pb-24" : "";
                    } else if (i + 1 === props.blocks.length) {
                        bottomSpacing = "mb-24"
                    }

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
                                    className={`${bottomSpacing}`}
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
                        case "PagesBlocksTestimonials":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Testimonials data={block} parentField={`blocks.${i}`}/>
                                </div>
                            );
                        case "PagesBlocksContent":
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
