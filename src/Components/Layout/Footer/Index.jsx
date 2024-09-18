/** @format */

import React from "react";
import Image from "../../../Constants/Image";
import PrimaryButton from "../../Inputs/PrimaryButton";
import SecondaryButton from "../../Inputs/secondaryButton/index";
import useMediaQuery from "@mui/material/useMediaQuery";
import { chipColors, colors } from "../../../Constants/theme";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Index() {
  const tablet = useMediaQuery("(max-width:1365px)");
  const phone = useMediaQuery("(max-width:751px)");

  const Account = [
    {
      name: "Stats & Expenses",
      href: "/account/Stats-And-Expense",
    },
    {
      name: "Ongoing Campaigns",
      href: "/account/Ongoing-Campaigns",
    },
    {
      name: "Account Sheet (Table)",
      href: "/account/Stats-And-Expense",
    },
  ];
  const About = [
    {
      name: "Overview",
      href: "/about/Overview",
    },
    {
      name: "Board of Management",
      href: "/about/Board-of-Management",
    },
    {
      name: "Departments & Facilities",
      href: "/about/Departments&Facilities",
    },
  ];
  let TermsPolicy = [
    {
      name: "Privacy Policy",
      href: "/Privacy-Policy",
    },
    {
      name: "Refund Policy",
      href: "/Refund-Policy",
    },
    {
      name: "Terms & Conditions",
      href: "/TermsAndCondition-Policy",
    },
  ];
  return (
    <div
      style={{ background: chipColors.color.free }}
      className='flex flex-col justify-center items-center py-10 max-tablet:py-0'
    >
      <div className=' w-[90%] max-tablet:w-[95%] gap-4  flex justify-between max-desktop:flex-col max-tablet:flex-col  items-start max-desktop:space-y-8 max-tablet:space-y-8'>
        <div className=' max-desktop:w-full mt-0 max-desktop:mt-8 max-tablet:mt-8 max-tablet:items-start  flex-col gap-2  max-desktop max-tablet:3 max-tablet:w-full flex justify-center items-start max-desktop:items-center'>
          <img src={Image.FooterLogo} alt='Footer Logo' className='h-full' />
          <p
            style={{ color: colors.tertiary.main }}
            className={`text-[1rem] font-roboto max-desktop:w-[650px] desktop:break-words  max-tablet:w-[98%] max-tablet:text-start max-desktop:text-center font-normal desktop:max-w-[300px] leading-[18.75px] `}
          >
            We provide a holistic education that blends Islamic teachings with
            modern academics. Our goal is to nurture ethical and compassionate
            individuals ready to contribute positively to society. Join us in
            empowering minds and enriching souls through education.
          </p>
        </div>
        <div className=' max-desktop:w-full max-desktop gap-8 max-tablet:1 max-tablet:w-full flex flex-col items-center'>
          <div className='flex items-center  max-tablet:items-start max-w-[835px] gap-y-8  max-tablet:w-[98%] gap-6 flex-wrap '>
            <div className='space-y-2'>
              <p
                className={`text-[1rem] font-roboto font-bold max-desktop:font-semibold max-tablet:font-medium text-[${colors.text.main}]`}
                style={{ color: colors.text.main }}
              >
                Accounts
              </p>
              <ul
                className='text-[1rem] font-normal font-roboto '
                style={{ color: colors.tertiary.main }}
              >
                {Account.map((item, index) => {
                  return (
                    <li className='a' key={index}>
                      <Link to={item.href}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='space-y-2'>
              <p
                className={`text-[1rem] font-roboto font-bold max-desktop:font-semibold max-tablet:font-medium text-[${colors.text.main}]`}
                style={{ color: colors.text.main }}
              >
                About Us
              </p>
              <ul
                className='text-[1rem] font-normal font-roboto '
                style={{ color: colors.tertiary.main }}
              >
                {About.map((item, index) => {
                  return (
                    <li className='a' key={index}>
                      <Link to={item.href}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='space-y-2'>
              <p
                className={`text-[1rem] font-roboto font-bold max-desktop:font-semibold max-tablet:font-medium text-[${colors.text.main}]`}
                style={{ color: colors.text.main }}
              >
                Contact Us
              </p>
              <ul
                className='text-[1rem] font-normal font-roboto '
                style={{ color: colors.tertiary.main }}
              >
                <li className='a'>
                  <p>Reach Out To Us At:</p>
                </li>
                <li className='a'>
                  <p>aamirali93680@gmail.com</p>
                </li>
                <li className='a'>
                  <p>+91 123-456-7890</p>
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <p
                className={`text-[1rem] font-roboto font-bold max-desktop:font-semibold max-tablet:font-medium text-[${colors.text.main}]`}
                style={{ color: colors.text.main }}
              >
                Terms & Policies
              </p>
              <ul
                className='text-[1rem] font-normal font-roboto '
                style={{ color: colors.tertiary.main }}
              >
                {TermsPolicy.map((item, index) => {
                  return (
                    <li className='a' key={index}>
                      <Link to={item.href}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={`desktop:text-center  max-desktop:text-start text-[#E5E5E5] flex gap-1  leading-[18.75px] max-desktop:mr-0 max-tablet:mr-0 max-tablet:text-start items-center max-tablet:w-full font-light mr-12`}
          >
            <IoLocationSharp className='max-tablet:w-[30px] max-tablet:h-[30px]' />
            Konark Indrayu, Kondhwa, Pune, Maharashtra, IND - 411048
          </div>
        </div>
        <div className=' max-desktop:w-full w-[200px]    max-tablet:gap-4 max-tablet:w-full flex desktop:flex-col max-desktop:flex-col max-tablet:flex-col  items-end justify-center max-desktop:items-center max-desktop:gap-8  gap-4'>
          <div className='flex  max-tablet:w-[90%] max-tablet:max-w-[300px] desktop:w-full desktop:justify-between  max-desktop:gap-[22px] justify-between'>
            <img
              className='max-tablet:size-[50px] max-desktop:size-[40px]'
              src={Image.LinkedIn}
              alt='LinkedIn'
            />
            <img
              className='max-tablet:size-[50px] max-desktop:size-[40px]'
              src={Image.Insta}
              alt='Instagram'
            />
            <img
              className='max-tablet:size-[50px] max-desktop:size-[40px]'
              src={Image.Facebook}
              alt='Facebook'
            />
            <img
              className='max-tablet:size-[50px] max-desktop:size-[40px]'
              src={Image.Twitter}
              alt='Twitter'
            />
          </div>
          <div className='w-full max-desktop:w-[420px] max-tablet:w-[90%] justify-center items-center flex max-tablet:flex-col desktop:flex-col max-desktop:flex  gap-4'>
            <Link to={"/contact-us"} className='w-full flex justify-center'>
              <SecondaryButton
                style={{
                  background: colors.secondary.dark,
                  color: colors.tertiary.dark,
                  fontSize: "1.12rem",
                  height: phone ? "50px" : "50px",
                  fontWeight: 500,
                  width: phone ? "100%" : tablet ? "250px" : "200px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                className='max-w-[310px] max-tablet:min-w-[330px]'
              >
                Contact Us
              </SecondaryButton>
            </Link>
            <Link
              to={"/account/Ongoing-Campaigns"}
              className='w-full flex justify-center'
            >
              <PrimaryButton
                className=' max-w-[310px] max-tablet:min-w-[330px]'
                style={{
                  background: "#ffffff24",
                  color: colors.text.main,
                  fontSize: "1.12rem",
                  height: phone ? "50px" : "50px",
                  fontWeight: 500,
                  width: phone ? "100%" : tablet ? "250px" : "200px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "none",
                    background: "#FFFFFF !important",
                  },
                }}
              >
                Donate Us
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-0.5 mt-7 bg-[#CCFBF133] w-[90%]'></div>
      <div className='flex w-full justify-center py-7'>
        <p
          className={`text-[0.85rem] max-tablet:text-[0.75rem] font-light font-roboto text-[#E5E5E5]`}
        >
          © 2024 All Rights Reserved. Crafted at{" "}
          <span
            className={`text-[${colors.text.main}] underline font-roboto text-[0.9rem] max-tablet:text-[0.8rem]`}
            style={{ color: colors.text.main }}
          >
            lowcosys.com
          </span>
        </p>
      </div>
    </div>
  );
}

export default Index;
