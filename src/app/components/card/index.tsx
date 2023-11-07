"use client";

import React, { useEffect, useState } from 'react'
import './card.style.css'
import CardProps from './interface/card.props'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
export const Card = ({ videoUrl, gradientColor, content,inverseGradientColor }: CardProps) => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);
    return (
        <div  className={`${gradientColor ? `cardBgGradient` : inverseGradientColor ? 'cardInverseBgGradient':'bg-white'} cardContent flex justify-center content-center`}>
            {(videoUrl && hasWindow) && (
                <ReactPlayer className='react-player' url={videoUrl} width="100%" height="100%" />
            )}
            {
                content && content
            }
        </div>
    )
}
