'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import ArrowIcon from '../arrow';
import SliderTextWithImage from '../sliderTextWithImage';

const CustomTextCarousel = ({ slides }: any) => {
    console.log(slides)
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };



    return (

        <div className="relative  overflow-hidden">
            {slides?.map((slide: any, index: number) => (
                <div
                    key={index}
                    className={`${index === currentSlide ? 'block' : 'hidden'
                        }   inset-0 flex items-center justify-center text-2xl font-bold transition-opacity duration-500`}
                >
                    <div className='flex flex-col pt-3 sm:pt-10 '>

                        <SliderTextWithImage
                            firstText={slide.title}
                            secondTextStyle={{ color: "#A5A6A7" }}
                            secondText={slide.text}
                            imageSrc={
                                <Image
                                    src={slide.imageUrl}
                                    height={62}
                                    width={62}

                                    className="self-center mb-2 rounded-full "
                                    alt="user"
                                />
                            } />
                        <div className='sm:block self-center  mt-5  w-28 '>
                            <div className='flex justify-between flex-row  ' >
                                <ArrowIcon disabled={false} onClick={prevSlide} />

                                <ArrowIcon right={true} onClick={nextSlide} />
                            </div>
                        </div>
                    </div>


                </div>
            ))}
        </div>


    );
};

export default CustomTextCarousel;
