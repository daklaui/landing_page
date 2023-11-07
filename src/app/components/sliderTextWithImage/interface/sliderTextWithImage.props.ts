import { ReactNode } from "react";

export default interface SliderTextWithImageProps {
    imageSrc?: ReactNode;
    firstText: string;
    secondText?: string[];
    firstTextStyle?: React.CSSProperties;
    secondTextStyle?: React.CSSProperties;
}