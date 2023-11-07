import React from 'react';
import { secondaryTextStyle, textStyle } from '../../common';
import RenderTextWithIconProps from './interface/textWithIcon.props';

const RenderTextWithIcon: React.FC<RenderTextWithIconProps> = ({
    imageSrc,
    firstText,
    secondText,
    firstTextStyle = {},
    secondTextStyle = {}
}) => {
    return (
        <div className='flex justify-center content-center flex-col px-20' >

            {imageSrc && imageSrc  }
            <div className="text-center">
                <p style={{...textStyle,...firstTextStyle}} className='text-2xl sm:text-4xl'>{firstText}</p>
                {secondText && <p style={{...secondaryTextStyle,...secondTextStyle}} className='text-1xl sm:text-2xl'>{secondText}</p>}
            </div>
        </div>
    );
};

export default RenderTextWithIcon;
