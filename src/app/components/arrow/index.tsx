'use client';
import Image from 'next/image';
import styles from './ArrowIcon.module.css';
import ArrowIconProps from './interface/ArrowIcon.props';
import { ArrowSvg } from './arrowIcon';


const ArrowIcon = ({ disabled = false, right = false, onClick }: ArrowIconProps) => {
  return (
    <button onClick={onClick} className={`${styles.arrowIconContainer} cursor-pointer ${right && `rotate-180`}`} style={{ backgroundColor: right ? "#434343" : "white" }}>
      <ArrowSvg color={!right ? 'black' : 'white'} />
    </button>
  );
};

export default ArrowIcon;
