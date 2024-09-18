/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { chipColors } from "../../../Constants/theme";
import { useMediaQuery } from "@mui/material";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Image from "../../../Constants/Image";

export default function ImageCarousel() {
  const threeImages = useMediaQuery(
    "(min-width:1367px) and (min-width:1366px)"
  );
  const twoImages = useMediaQuery("(min-width:751px) and (max-width:1366px)");
  const oneImage = useMediaQuery("(max-width:750px)");

  const slides = [Image.AboutImgOne, Image.AboutImgTwo, Image.DepartmentImg];

  return (
    <div className='w-full h-[426px] max-desktop:h-[313px] relative flex items-center justify-center'>
      <div
        className='w-full h-[353px] max-desktop:hidden max-tablet:hidden'
        style={{ background: chipColors.color.free }}
      ></div>
      <div className='w-[79.17%] max-desktop:w-full max-tablet:w-full absolute top-0 flex'>
        <Swiper
          modules={Autoplay}
          slidesPerView={threeImages ? 3 : twoImages ? 2 : 1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          //   loop
          spaceBetween={0}
          className='w-full'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                className={`w-full object-cover ${
                  threeImages
                    ? "h-[426px]"
                    : twoImages
                    ? "h-[360px]"
                    : "h-[313px]"
                }`}
                alt=''
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
