/** @format */

import React from "react";
import { chipColors, colors, theme } from "../../../Constants/theme";
import { Gallery } from "../Gallery/Index";

let data = [
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
  {
    img: "https://images.pexels.com/photos/5988924/pexels-photo-5988924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Firstname Surname",
    role: "Founder / Owner",
    date: "1999 - 2024",
  },
];

function Index() {
  return (
    <div className='w-[79.17%] max-desktop:w-[650px] max-tablet:w-[90%] max-tablet:max-w-[500px]  m-auto items-center  py-[100px] max-desktop:py-[80px] max-tablet:py-[60px] flex flex-col gap-[110px] max-desktop:gap-[80px] max-tablet:gap-[60px]'>
      <h1
        className='text-[2.25rem] uppercase max-tablet:text-[1.5rem] max-desktop:text-[1.875rem] font-extrabold font-roboto'
        style={{ color: colors.text.light }}
      >
        Board of Management
      </h1>
      <div className='flex flex-col text-center  w-[300px] '>
        <img
          src={data[0].img}
          alt=''
          loading='lazy' // Added lazy loading
          className='h-[299.75px] bg-cover bg-center  w-full rounded-t-[10px]'
        />
        <div className=' w-full rounded-b-[10px] overflow-hidden'>
          <div
            className='w-full py-[10.98px] font-roboto space-y-[5.98px] text-[#D9D9D9]'
            style={{ background: chipColors.color.free }}
          >
            <h1 className='text-[1.375rem] font-extrabold'>{data[0].name}</h1>
            <p className='font-normal text-[0.875rem]'>{data[0].role}</p>
            <p className='font-normal text-[0.875rem]'>{data[0].date}</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-wrap gap-[100px] justify-evenly  gap-y-[100px]'>
        {data.map((item, index) => {
          return (
            <div key={index} className='flex flex-col text-center  w-[250px] '>
              <img
                src={item.img}
                alt=''
                loading='lazy' // Added lazy loading to all images
                className='h-[249.5px] bg-cover bg-center  w-full rounded-t-[10px]'
              />
              <div className=' w-full rounded-b-[10px] overflow-hidden'>
                <div
                  className='w-full py-[6.98px] font-roboto space-y-[2.98px] text-[#D9D9D9]'
                  style={{ background: chipColors.color.free }}
                >
                  <h1 className='text-[1.375rem] font-extrabold'>
                    {item.name}
                  </h1>
                  <p className='font-normal text-[0.875rem]'>{item.role}</p>
                  <p className='font-normal text-[0.875rem]'>{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1
        className='text-[2.25rem] uppercase max-tablet:text-[1.5rem] max-desktop:text-[1.875rem] font-extrabold font-roboto'
        style={{ color: colors.text.light }}
      >
        Our Madrasa
      </h1>
      {/* <Gallery /> */}
      <Gallery />
    </div>
  );
}
export default Index;
