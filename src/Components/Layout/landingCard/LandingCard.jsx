/** @format */

import React from "react";
import Image from "../../../Constants/Image";
import { colors } from "../../../Constants/theme";

function LandingCard({ img, title, content, imageOnLeft, index }) {
  const isSpecialIndex = index === 1 || index === 2;

  return (
    <div className={`w-full ${imageOnLeft ? "" : "bg-[#E0F2FE]"}`}>
      <div
        className={`w-[79.17%] max-desktop:py-20 max-tablet:py-[50px] gap-5 max-desktop:w-[700px] max-tablet:w-[90%] max-tablet:max-w-[500px] m-auto flex max-desktop:flex-col max-tablet:flex-col ${
          imageOnLeft ? "flex" : "flex-row-reverse bg-[#E0F2FE]"
        } ${isSpecialIndex ? "desktop:h-[520px] h-full" : ""}`}
      >
        <div
          className={`w-1/2 max-desktop:w-full max-tablet:w-full max-tablet:justify-center max-desktop:justify-center flex justify-center items-end ${
            isSpecialIndex
              ? "desktop:h-[520px] h-full flex items-center justify-center"
              : ""
          }`}
        >
          <img src={img} className={`bg-cover object-cover bg-center`} alt='' />
        </div>
        <div
          className={`w-1/2 max-desktop:w-full max-tablet:w-full max-tablet:justify-center max-desktop:justify-center flex ${
            imageOnLeft ? "justify-end" : "justify-start"
          } items-center ${
            isSpecialIndex ? "desktop:h-[520px] flex items-center" : ""
          }`}
        >
          <div className='w-[694px] max-tablet:w-full text-start'>
            <h1
              className='text-[3rem] uppercase leading-10 w-[515px] max-tablet:w-full max-tablet:text-[1.775rem] max-tablet:leading-8 font-playfair font-black'
              style={{
                background: colors.text.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h1>
            <p
              className='text-[1.125rem] max-tablet:text-[1rem] max-tablet:w-full text-justify font-roboto font-normal leading-[30px] max-desktop:leading-[28px] max-tablet:leading-6'
              style={{ color: colors.text.dark }}
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
