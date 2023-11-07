import React from 'react';
import SliderTextWithImageProps from './interface/sliderTextWithImage.props';
import { secondaryTextStyle, textStyle } from '../../common';
 
const SliderTextWithImage: React.FC<SliderTextWithImageProps> = ({
    imageSrc,
    firstText,
    secondText,
    firstTextStyle = {},
    secondTextStyle = {}
}) => {
    return (
        <div className='flex justify-center content-center flex-col sm:px-20' >

            {imageSrc && imageSrc  }
            <div className="text-center">
                <p style={{...textStyle,...firstTextStyle}} className='text-sm sm:text-2xl'>{firstText}</p>
                {secondText && <p style={{...secondaryTextStyle,...secondTextStyle}} className='text-sm sm:text-xl'>{secondText}</p>}
            </div>
        </div>
    );
};

export default SliderTextWithImage;
