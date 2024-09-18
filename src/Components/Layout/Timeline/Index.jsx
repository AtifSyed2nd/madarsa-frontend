/** @format */

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import { colors } from "../../../Constants/theme";
import Image from "../../../Constants/Image";
import { useMediaQuery } from "@mui/material";

export default function CustomizedTimeline() {
  const Desktop = useMediaQuery("(max-width:1365px)");
  const tablet = useMediaQuery("(max-width:751px)");

  const customStyle = {
    "& .MuiTimelineItem-root::before": {
      content: "none",
    },
  };
  let data = [
    {
      img: Image.HelpUsImgOne,
      title: "Student Scholarships",
      content:
        "Providing financial assistance to underprivileged students who cannot afford tuition fees, books & other educational resources.",
    },
    {
      img: Image.HelpUsImgTwo,
      title: "Educational Resources",
      content:
        "Purchasing books, technology & other learning materials to enhance the educational experience of students.",
    },
    {
      img: Image.HelpUsImgThree,
      title: "Facility Improvements",
      content:
        "Funding for the renovation & maintenance of school buildings, classrooms, and libraries to create a better learning environment.",
    },
    {
      img: Image.HelpUsImgFour,
      title: "Teacher Training Programs",
      content:
        "Investing in professional development programs for teachers to ensure they are equipped with the latest educational techniques & methodologies.",
    },
    {
      img: Image.HelpUsImgFive,
      title: "Orphan & Needy Student Support",
      content:
        "Providing comprehensive support to orphans and students from low-income families, covering their education, meals, clothing & accommodation.",
    },
  ];

  return (
    <div
      className='max-desktop:w-full  px-0 max-tablet:w-full '
      style={{
        background: "radial-gradient(#E0F2FE, #FFFFFF)",
      }}
    >
      <div className='w-full flex my-24 max-desktop:my-20 max-tablet:my-24 max-tablet:mb-32  justify-center relative'>
        <h1
          className={`text-[3.75rem] max-desktop:text-[2.575rem] max-tablet:text-[2.325rem] uppercase font-playfair font-black  text-[${colors.text.dark}]`}
        >
          Donate
          <span className='text-[2rem] max-desktop:text-[1.7rem] max-tablet:text-[1.35rem] font-playfair italic'>
            {" "}
            to a
          </span>{" "}
          <br />
          <span
            className=' text-[3.2rem] max-desktop:text-[2.3rem] max-tablet:text-[2.05rem] absolute max-tablet:top-8 max-desktop:top-9 top-14 max font-black font-playfair '
            style={{ color: colors.primary.light }}
          >
            good cause
          </span>
        </h1>
      </div>
      <div className='w-full desktop:max-w-[1700px] desktop:m-auto max-desktop:p-5 py-[100px] max-tablet:pb-20 max-desktop:pb-20'>
        <Timeline
          position={Desktop ? "right" : "alternate"}
          className='flex gap-12 max-desktop:gap-20 max-tablet:gap-32  max-desktop:items-center max-tablet:items-center'
          sx={Desktop ? customStyle : {}}
        >
          {data.map((item, index) => {
            let rowReverse = index % 2 === 1;
            return (
              <TimelineItem
                key={index}
                className='items-center flex max-tablet:flex-col'
              >
                <TimelineSeparator className='max-tablet:absolute max-tablet:top-[0%] max-tablet:translate-y-[-50%] max-tablet:right-[50%] max-tablet:translate-x-[50%] z-10'>
                  <div
                    style={{
                      background: colors.primary.dark,
                      boxShadow: "4px 4px 6px #00000026",
                    }}
                    className={`flex justify-center items-center w-[250px] h-[200px] max-tablet:w-[150px] max-tablet:h-[150px] max-tablet:rounded-full max-desktop:rounded-tl-[0px] max-desktop:rounded-tr-[20px] max-desktop:rounded-br-[0px] max-desktop:rounded-bl-[20px] ${
                      rowReverse
                        ? "rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px]"
                        : "rounded-tl-[0px] rounded-tr-[20px] rounded-br-[0px] rounded-bl-[20px]"
                    } shadow-md`}
                  >
                    <img src={item.img} className='max-tablet:w-3/4' alt='' />
                  </div>
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    padding: "0 !important",
                    position: "relative",
                  }}
                  className='flex-grow max-tablet:pt-[100px] max-tablet:pb-[100px]'
                >
                  <div
                    style={{
                      background: colors.secondary.light,
                      borderColor: colors.primary.light,
                      boxShadow: "4px 4px 6px #00000026",
                    }}
                    className={`py-[42px] max-tablet:max-w-[350px] max-desktop:max-w-[655px] w-[100%] max-tablet:border-[2px] max-tablet:rounded-2xl max-tablet:text-center max-tablet:pt-20 px-[10px] font-roboto text-justify max-desktop:border-r-2 max-desktop:border-t-2 max-desktop:border-l-0 max-desktop:border-b-2 max-desktop:rounded-e-[20px] max-desktop:rounded-s-none  ${
                      rowReverse
                        ? "text-end max-desktop:text-start"
                        : "text-start"
                    } border-[2px] ${
                      rowReverse
                        ? "border-l-2 border-t-2 border-r-0 border-b-2 rounded-tl-[20px] rounded-bl-[20px]"
                        : "border-r-2 border-t-2 border-l-0 border-b-2 rounded-tr-[20px] rounded-br-[20px]"
                    }`}
                  >
                    <h1 className='text-[1.5rem] font-black leading-6 max-tablet:text-[1.25rem]'>
                      {item.title}
                    </h1>
                    <p className='text-[1.125rem] max-desktop:text-[1rem] max-tablet:text-[1rem] font-normal leading-5'>
                      {item.content}
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
