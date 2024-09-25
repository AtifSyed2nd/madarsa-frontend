/** @format */

import React from "react";
import { chipColors, colors, theme } from "../../../Constants/theme";
import { Gallery } from "../Gallery/Index";

import Founder from "../../../Assets/Board-of-Management/Hazrat-Maulana-Md-Ali-Qasmi_Founder_2000-present.jpg"
import MdAamir from "../../../Assets/Board-of-Management/Mufti-Md-Aamir_Secretary_2018-present.jpg"
import MdHammad from "../../../Assets/Board-of-Management/Qari-Md-Hammad_Treasurer_2022-present.jpg"
import MaulanaMdGhalib from "../../../Assets/Board-of-Management/Maulana-Md-Ghalib_Teacher_2001-present.jpg"
import MaulanaMdRashid from "../../../Assets/Board-of-Management/Maulana-Md-Rashid_Teacher_2002-present.jpg"
import MaulviMdJawed from "../../../Assets/Board-of-Management/Maulvi-Md-Jawed_Accountant_2020-present.jpg"
import MdAmjad from "../../../Assets/Board-of-Management/Md-Amjad_Member_2022-present.jpg"
import MdSharik from "../../../Assets/Board-of-Management/Md-Sharik_Member_2022-present.jpg"


let data = [
  
  {
    img: MdAamir,
    name: "Maulana Md Aamir",
    role: "Secretary",
    date: "2018 - Present",
  },
  {
    img: MdHammad,
    name: "Maulvi Md Hammad",
    role: "Treasurer",
    date: "2022 - Present",
  },
  {
    img: MaulanaMdGhalib,
    name: "Maulana Md Ghalib",
    role: "Teacher",
    date: "2001 - Present",
  },
  {
    img: MaulanaMdRashid,
    name: "Maulana Md Rashid",
    role: "Teacher",
    date: "2002 - Present",
  },
  {
    img: MaulviMdJawed,
    name: "Maulvi Md Jawed",
    role: "Accountant",
    date: "2000 - Present",
  },
  {
    img: MdAmjad,
    name: "Md Amjad",
    role: "Member",
    date: "2022 - Present",
  },
  {
    img: MdSharik,
    name: "Md Sharik",
    role: "Member",
    date: "2022 - Present",
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
      <div className='flex flex-col text-center  w-[300px] shadow-lg'>
        <img
          src={Founder}
          alt=''
          loading='lazy' // Added lazy loading
          className='max-h-80 bg-cover bg-center  w-auto rounded-t-[10px]'
        />
        <div className=' w-full rounded-b-[10px] overflow-hidden'>
          <div
            className='w-full py-[10.98px] font-roboto space-y-[5.98px] text-amber-950 bg-amber-200'
            // style={{ background: chipColors.color.free }}
          >
            <h1 className='text-[1.375rem] font-extrabold'>Hazrat-Maulana-Md-Ali-Qasmi</h1>
            <p className='font-normal text-[0.875rem]'>Founder</p>
            <p className='font-normal text-[0.875rem]'>2000 - Present</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-wrap gap-[100px] justify-evenly  gap-y-[100px]'>
        {data.map((item, index) => {
          return (
            <div key={index} className='flex flex-col text-center  w-[250px] shadow-lg '>
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
