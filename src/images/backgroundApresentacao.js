import React from "react";
import { useState, useEffect } from "react";



function BackgroundApresentacao() {

  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [flagOpacity, setFlagOpacity] = useState(1);

  useEffect(() => {

    setTimeout(() => {
      if(count < 2200)
      setCount((count) => {return count + 1});

      if(opacity > 0.9)
       setFlagOpacity((flagOpacity) => {return 0 });
      
       if(opacity < 0.6)
       setFlagOpacity((flagOpacity) => {return 1 });

      if(flagOpacity)
      setOpacity((opacity) => {return opacity + 0.002 });

      if(flagOpacity == 0 )
      setOpacity((opacity) => {return opacity - 0.001 });

    }, 10);

    
    var viewBox
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={2000 + count}
      height={2500 }
      fill="none"
      viewBox={"0 0 "+ (3004 + count) + " " + (2000 + count/2)}
    >
      <g filter="url(#filter0_f_77_2)" opacity={opacity}>
        <path
          fill="url(#paint0_radial_77_2)"
          d="M1009 597.5c0-86.399-19.691-171.397-57.242-247.091-37.551-75.695-91.744-139.63-157.541-185.862-65.797-46.233-141.062-73.263-218.801-78.577-77.738-5.314-155.426 11.26-225.843 48.181-70.416 36.921-131.275 92.991-176.92 162.998-45.645 70.008-74.594 151.68-84.157 237.426-9.563 85.746.57 172.782 29.46 253.018 28.888 80.236 75.595 151.069 135.777 205.913L547 597.5h462z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_77_2"
          width="1093.6"
          height="1078.1"
          x="0.202"
          y="0.202"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_77_2"
            stdDeviation="42.399"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_77_2"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 762.649 -687.5 0 547 347.351)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.052" stopColor="#FB4590"></stop>
          <stop offset="0.396" stopColor="#6322FE" stopOpacity="0.25"></stop>
          <stop offset="0.786" stopColor="#5A0DFF" stopOpacity="0.44"></stop>
          <stop offset="1" stopColor="#0D6EFF" stopOpacity="0.67"></stop>
          <stop offset="1" stopColor="#0D25FF" stopOpacity="0.49"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default BackgroundApresentacao;
