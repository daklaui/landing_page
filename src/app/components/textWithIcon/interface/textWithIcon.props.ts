import { ReactNode } from "react";

export default interface RenderTextWithIconProps {
    imageSrc?: ReactNode;
    firstText: string;
    secondText?: string;
    firstTextStyle?: React.CSSProperties;
    secondTextStyle?: React.CSSProperties;
}