import React, { useState } from 'react';

import RenderTextWithIcon from '../textWithIcon';
import UploadProps from './interface/upload.props';
import Image from 'next/image';

const UploadFile: React.FC<UploadProps> = () => {
    const [files, setFile] = useState<any>([]);

    const handleFile = (e: any) => {

        let file = e?.target?.files;
        setFile([...files, ...file]);
    };


    return (
        <div className='flex  justify-center content-center flex-col  ' >
            <input type="file" onChange={handleFile} className="cardContent right-28 opacity-0 z-10 absolute  cursor-pointer " multiple name="files[]" />
            <RenderTextWithIcon
                firstText='Upload CV' secondText='PDF or DOCX' imageSrc={
                    <img
                        src={'/assets/svg_icons/upload.svg'}
                        className="self-center upload_icon"
                        alt="upload icon"

                    />
                } />
        </div>
    );
};

export default UploadFile;
