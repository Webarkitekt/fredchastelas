import React, { useEffect, useState } from "react";
import type { PagesBlocks } from "../tina/__generated__/types";
import { Hero } from "./blocks/hero";
import { Introduction } from "./blocks/introduction";
import { Feature } from "./blocks/feature";
import { TextAndImage } from "./blocks/text-and-image";
import { Content } from "./blocks/content";
import { EventsList } from "./blocks/eventsList";
import { Testimonials } from "./blocks/testimonials";
import { NewsletterBlock } from "./blocks/newsletter";
import { YoutubeVideo } from "./blocks/YoutubeVideo";

export const Blocks = ({ blocks }: { blocks: PagesBlocks[] }) => {
    return (
        <>
            {blocks
                ? blocks.map(function (block, i) {
                    const nextBlock = i < blocks.length ? blocks[i + 1] : null;
                    const currentBlock = block as any;
                    let bottomSpacing: string = "";
                    let reducePadding: boolean = false;

                    // Check if current and next block have same background color
                    if (nextBlock && (nextBlock.__typename === "PagesBlocksTextAndImage" || nextBlock.__typename === "PagesBlocksContent")) {
                        if (currentBlock.bgColor === nextBlock.bgColor && currentBlock.bgColor === 'bg-secondary') {
                            reducePadding = true;
                        } else if (nextBlock.bgColor === 'bg-secondary') {
                            bottomSpacing = "pb-12 lg:pb-24";
                        }
                    }

                    switch (block.__typename) {
                        case "PagesBlocksEvents":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}

                                >
                                    <EventsList data={block} parentField={`blocks.${i}`} />
                                </div>
                            );

                        case "PagesBlocksHero":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                    className={`${bottomSpacing}`}
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
                        case "PagesBlocksTestimonials":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Testimonials data={block} parentField={`blocks.${i}`} />
                                </div>
                            );
                        case "PagesBlocksContent":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Content data={block} parentField={`blocks.${i}`} className={`${bottomSpacing} ${reducePadding ? '!pb-0' : ''}`} />
                                </div>
                            );
                        case "PagesBlocksNewsletter":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <NewsletterBlock data={block} parentField={`blocks.${i}`} className={`${bottomSpacing}`}></NewsletterBlock>
                                </div>
                            );
                        case "PagesBlocksYoutubeVideo":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <YoutubeVideo data={block} />
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
