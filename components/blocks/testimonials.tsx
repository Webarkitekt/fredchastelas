import * as React from 'react'
import {useState} from "react";
import type {TinaTemplate} from "tinacms";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperArrowLeft from '../../public/swiper-arrow-left.svg';
import SwiperArrowRight from '../../public/swiper-arrow-right.svg';

export const Testimonials = ({data, parentField}) => {

    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    return (
        <div className="max-w-2xl bg-gray-100 p-28 mx-auto mb-20">
            <h2 className="font-serif text-3xl lg:text-5xl text-gray-600 pb-12">{data.title}</h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={{prevEl, nextEl}}>
                {data.testimonial.map((testimonial, i) => (
                    <SwiperSlide key={i} className={'max-w-2xl'}>
                        <div className={'text-gray-500'}>
                            <div className={'text-sm uppercase pb-2'}>
                                {testimonial.type}
                            </div>
                            <div className={'font-serif text-xl pb-2'}>
                                {testimonial.text}
                            </div>
                            <div className={'text-gray-700 italic text-right'}>
                                {testimonial.author}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={'flex space-x-8 items-center justify-center w-full '}>
                <div className={'cursor-pointer'} ref={(node) => setPrevEl(node)}><SwiperArrowLeft/></div>
                <div className={'cursor-pointer'} ref={(node) => setNextEl(node)}><SwiperArrowRight/></div>
            </div>
        </div>
    )
}


export const testimonialsBlockSchema: TinaTemplate = {
    name: "testimonials",
    label: "Témoignages",
    ui: {
        previewSrc: "/blocks/testimonials.png",
    },
    fields: [
        {
            type: 'string',
            label: 'Title',
            name: 'title'
        },
        {
            type: 'object',
            label: 'Témoignage',
            name: 'testimonial',
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Type",
                    name: "type",
                },
                {
                    type: "string",
                    label: "Auteur",
                    name: "author",
                },
                {
                    type: "string",
                    label: "Témoignage",
                    name: "text",
                    ui: {
                        component: "textarea"
                    }
                }
            ]
        }
    ]
}
