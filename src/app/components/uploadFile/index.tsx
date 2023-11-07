import React, { useState } from 'react';
import { secondaryTextStyle, textStyle } from '../../common';

import UploadProps from './interface/upload.props';
import RenderTextWithIcon from '../textWithIcon';

const UploadFile: React.FC<UploadProps> = () => {
    const [files, setFile] = useState<any>([]);
    const [message, setMessage] = useState("");

    const handleFile = (e: any) => {
        setMessage("");
        let file = e?.target?.files;
        setFile([...files, ...file]);
    };
    const removeImage = (i: number) => {
        setFile(files.filter((x: any) => x.name !== i));
    }

    return (
        <div className='flex  justify-center content-center flex-col px-20' >
            <input type="file" onChange={handleFile} className="h-full w-full opacity-0 z-10 absolute  cursor-pointer " multiple name="files[]" />
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
