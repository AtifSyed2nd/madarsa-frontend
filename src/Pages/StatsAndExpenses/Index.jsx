/** @format */

import React, { useState } from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Table from "../../Components/StatsTable/index";
import Footer from "../../Components/Layout/Footer/Index";
import Image from "../../Constants/Image";
import { chipColors, colors } from "../../Constants/theme";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import SecondaryButton from "../../Components/Inputs/secondaryButton";
import { useMediaQuery } from "@mui/material";
import { useGetAll } from "../../Hooks/useGetAll";

const Index = () => {
  const phone = useMediaQuery("(max-width:751px)");

  const { data: statsData } = useGetAll({
    key: `/records/statistics/nt/`,
    enabled: true,
    select: (data) => {
      return data.data.rows;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const { data: ExpensesData } = useGetAll({
    key: `/records/expenses/nt/`,
    enabled: true,
    select: (data) => {
      return data.data.rows;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const { data: urgentExpenses } = useGetAll({
    key: `/records/urgent-expenses/nt/`,
    enabled: true,
    select: (data) => {
      console.log(data, "=====>urgentExpenses");
      return data.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <NavbarCustom />
      <div>
        <img
          src={Image.statsExpense}
          alt='Statsimage'
          className='w-full  object-cover bg-bottom  bg-no-repeat max-tablet:h-[200px] max-desktop:h-[300px] h-[600px]'
        />
      </div>
      {/* ================================================================= */}

      <div className='w-[100%] text-center m-auto bg-white flex flex-col items-center gap-24 max-desktop:gap-[3.75rem] max-tablet:gap-[1.875rem] max-tablet:py-[1.875rem] py-[4.125rem]'>
        <div className='font-light items-center text-xl  max-desktop:w-[70%] max-tablet:w-[95%] max-desktop:text-base max-tablet:text-sm justify-center text-center'>
          <span>Narrated by Abu Huraira:</span>
          <br />
          <span>The Messenger of Allah (ﷺ) said:</span>
        </div>
        <div className='flex flex-col  items-center  max-desktop:w-[70%] max-tablet:w-[95%] justify-center text-center'>
          <p className='font-playfair leading-[28px] max-desktop:text-[2rem] max-tablet:text-2xl font-black text-5xl max-w-[95rem]'>
            When a man dies,
            <br />
            <span className='text-2xl leading-[12px] font-normal font-playfair'>
              his deeds come to an end except for three things: Sadaqah Jariyah
              (ongoing charity), knowledge which is beneficial <br /> or a
              virtuous descendant who prays for him.
            </span>
          </p>
        </div>
        <div className='font-lato font-light text-xl max-desktop:text-base max-tablet:text-sm'>
          Sahih Muslim (1631)
        </div>
      </div>

      {/* ================================================================= */}

      <div
        className='w-[100%] text-center m-auto  flex flex-col items-center gap-24 max-desktop:gap-[3.75rem] max-tablet:gap-[1.875rem] max-tablet:py-[1.875rem] py-[4.125rem]'
        style={{ background: colors.tertiary.gradient }}
      >
        <div className='font-light font-lateef items-center max-desktop:w-[70%] max-tablet:w-[95%] text-xl max-desktop:text-base max-tablet:text-sm justify-center text-center'>
          <p className='text-xl'>
            : ابوہریرہ رضی اللہ عنہ سے روایت ہے:
            <br /> رسول اللہ صلی اللہ علیہ وسلم نے فرمایا
          </p>
        </div>
        <div className='flex flex-col max-desktop:w-[70%] max-tablet:w-[95%] items-center justify-center text-center'>
          <p className='font-lateef leading-[28px] max-desktop:text-[2rem] max-tablet:text-2xl font-black text-5xl max-w-[95rem]'>
            ،جب انسان مر جاتا ہے
            <br />
            <span className='text-2xl leading-[12px] font-normal font-lateef'>
              ،تین چیزوں کے علاوہ اس کے اعمال ختم ہو جاتے ہیں: صدقہ جاریہ -علم
              جو فائدہ مند ہو، یا نیک اولاد جو اس کے لیے دعا کرے
            </span>
          </p>
        </div>
        <div className=' font-lateef font-light text-xl max-desktop:text-base max-tablet:text-sm'>
          صحیح مسلم (۱۳۶۱)
        </div>
      </div>

      {/* ================================================================= */}

      <div className='w-[75%] max-desktop:w-[95%] max-tablet:w-[100%] py-[6.25rem] max-tablet:py-[3.75rem] m-auto flex flex-col justify-center items-center '>
        <div className='mb-10'>
          <p className='font-extrabold font-roboto text-center text-4xl leading-[2.625rem] uppercase tracking-tighter'>
            Statistics
          </p>
          <p className='font-roboto font-normal text-2xl leading-7 text-center uppercase tracking-tight'>
            Madrasa Darululoom Rasheedia
          </p>
        </div>

        <Table
          boldLastElement={true}
          items={statsData}
          keyOne={"stat_english_title"}
          keyTwo={"stat_count"}
          keyThree={"stat_urdu_title"}
          color={colors.tertiary.gradient}
        />
      </div>

      <div className='w-[75%] max-desktop:w-[95%] max-tablet:w-[100%] py-[6.25rem] max-tablet:py-[3.75rem] m-auto flex flex-col justify-center items-center '>
        <div className='mb-10'>
          <p className='font-extrabold font-roboto text-center text-4xl leading-[2.625rem] uppercase tracking-tighter'>
            Annual Expenses
          </p>
          <p className='font-roboto font-normal text-2xl leading-7 text-center uppercase tracking-tight'>
            Madrasa Darululoom Rasheedia
          </p>
        </div>
        <Table
          items={ExpensesData}
          keyOne={"exp_english_title"}
          keyTwo={"exp_amount"}
          keyThree={"exp_urdu_title"}
          boldLastElement={true}
          boldFirstElement={true}
          color={colors.tertiary.gradient}
        />
      </div>

      <div className='w-[75%] max-desktop:w-[95%] max-tablet:w-[100%] py-[6.25rem] max-tablet:py-[3.75rem] m-auto flex flex-col justify-center items-center '>
        <div className='mb-10'>
          <p className='font-extrabold font-roboto text-center text-4xl leading-[2.625rem] uppercase tracking-tighter'>
            Urgent appeal
          </p>
          <p className='font-roboto font-normal text-2xl leading-7 text-center uppercase tracking-tight'>
            Madrasa Darululoom Rasheedia
          </p>
        </div>
        <Table
          items={urgentExpenses}
          keyOne={"exp_english_title"}
          keyTwo={"exp_amount"}
          keyThree={"exp_urdu_title"}
          color={"#075985"}
          invert={true}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
