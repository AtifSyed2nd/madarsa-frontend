/** @format */

import React, { useState } from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import { colors, theme } from "../../Constants/theme";
import Filters from "../../Components/Layout/Filters/Index";
import Card from "../../Components/Layout/Card/Index";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import SecondaryButton from "../../Components/Inputs/secondaryButton";
import { useMediaQuery } from "@mui/material";
import { PiMinus, PiPlus } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { useGetAll } from "../../Hooks/useGetAll";
import { Loader } from "../../Components/Layout/Card/CardLoader";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Image from "../../Constants/Image";
import { BsFillImageFill } from "react-icons/bs";

function Index() {
  const { title } = useParams();
  const name = title;
  const phone = useMediaQuery("(max-width:751px)");
  const tablet = useMediaQuery("(max-width:1366px)");

  const [visibleCards, setVisibleCards] = useState(tablet ? 2 : phone ? 2 : 4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const navigate = useNavigate();

  const tagParams = selectedTitles
    .map((tag) => `${encodeURIComponent(tag)}`)
    .join(",");

  const url = `/campaign/active/nt/?category_title=${encodeURIComponent(
    name
  )}&limit=${visibleCards}${tagParams ? `&tag_name=${tagParams}` : ""}`;

  console.log(url, "=========>Url");

  const {
    data: campaignData = [],
    error: apiError,
    isLoading,
  } = useGetAll({
    key: url,
    select: (data) => data?.data?.rows || [],
    onSuccess: () => setLoading(false),
    onError: () => {
      setError(true);
      setLoading(false);
    },
  });

  const loadMore = () => setVisibleCards((prev) => prev + 4);
  const loadLess = () => setVisibleCards(tablet ? 2 : phone ? 2 : 4);

  return (
    <div>
      <NavbarCustom />
      <div className='w-full pt-[3.5rem]'>
        <img
          src={Image.DepartmentImg}
          className='w-full object-cover bg-bottom bg-no-repeat max-tablet:h-[200px] max-desktop:h-[300px] h-[600px]'
          alt='Campaign Header'
        />
      </div>
      <div className='w-[79.17%] max-desktop:w-[700px] max-tablet:w-[90%] max-tablet:max-w-[500px] m-auto items-center py-[100px] max-desktop:py-[80px] max-tablet:py-[60px] flex flex-col gap-[40px] max-desktop:gap-[32px] max-tablet:gap-[20px]'>
        <div className='flex items-center w-full'>
          <IoArrowBackSharp
            onClick={() => navigate(-1)}
            color={`${theme.palette.green.main}`}
            className='size-10 p-1 max-desktop:size-9 max-tablet:size-7 hover:bg-slate-300 me-2 bg-slate-200 rounded-full'
          />
          <p className='font-roboto font-normal text-[36px] max-desktop:text-[28px] max-tablet:text-[1.5rem]'>
            Category's
          </p>
        </div>
        <div className='leading-8 text-center'>
          <p className='font-roboto font-normal text-[2rem] max-desktop:text-[1.7rem] max-tablet:text-[1.5rem]'>
            ~Donate to~
          </p>
          <h1
            className='text-[2.25rem] uppercase max-tablet:text-[1.5rem] max-desktop:text-[1.875rem] font-extrabold font-roboto'
            style={{ color: colors.text.light }}
          >
            {campaignData.length > 0 &&
              campaignData[0]?.categories?.category_title}{" "}
            Campaigns
          </h1>
        </div>
        <div className='w-full'>
          <Filters onChangeFilter={setSelectedTitles} />
          <div className='w-full flex flex-wrap items-center gap-x-2 gap-y-10 max-tablet:gap-y-6 justify-evenly'>
            {loading ? (
              <>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
              </>
            ) : error ? (
              <div className='text-red-500'>
                Error loading campaigns. Please try again later.
              </div>
            ) : campaignData.length === 0 ? (
              <div className='text-center w-full flex flex-col items-center gap-3'>
                <FiInfo
                  className='text-[2rem] size-24 max-desktop:size-20 max-tablet:size-16 text-blue-500 animate-bounce'
                  title='Information about ongoing campaigns'
                />
                <p className='text-gray-500 text-[2rem] max-desktop:text-[1.5rem] max-w-[400px] max-tablet:text-[1.2rem]'>
                  Sorry! No campaigns found for this category. Please try again
                  later.
                </p>
                <PrimaryButton
                  onClick={() => navigate(-1)}
                  sx={{
                    marginTop: "20px",
                    height: "44px",
                    width: "150px",
                    border: `1px solid ${colors.primary.dark}`,
                    borderRadius: "5px",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                  }}
                >
                  Back
                </PrimaryButton>
              </div>
            ) : (
              campaignData.slice(0, visibleCards).map((item, index) => {
                const image = `${process.env.REACT_APP_FE_URL}${item.image}`;
                return (
                  <div
                    key={index}
                    className='transition-transform transform duration-500 ease-in-out scale-95 opacity-0 animate-fadeIn'
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Card
                      id={item?.campaign_id}
                      tags={item?.tags}
                      img={image}
                      title={item.campaign_name}
                      days={item.days_left}
                      totalDonation={item.donation_count}
                      goalAmount={item.target_amount}
                      actualAmount={item.fund_raised}
                      filters={item?.filters}
                    />
                  </div>
                );
              })
            )}
          </div>
          {campaignData.length > 0 && (
            <div className='flex items-center justify-between flex-wrap max-tablet:flex max-tablet:justify-center max-tablet:w-full mt-8 max-desktop:mt-6 max-tablet:mt-4'>
              <div
                className='max-tablet:hidden'
                style={{ padding: "8px", flex: "1 1 auto" }}
              >
                <div style={{ height: "3px", background: "#134E4A" }}></div>
              </div>
              <div
                style={{
                  padding: "8px",
                  flex: "0 1 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {visibleCards >= campaignData.length ? (
                  <PrimaryButton
                    sx={{
                      color: colors.text.main,
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      fontFamily: "roboto",
                      height: "50px",
                      maxWidth: "294px",
                      borderRadius: "5px",
                      width: phone ? "294px" : "200px",
                    }}
                    onClick={loadLess}
                  >
                    <PiMinus className='size-5 me-1 font-bold' />
                    See Less
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    sx={{
                      color: colors.text.main,
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      fontFamily: "roboto",
                      height: "50px",
                      maxWidth: "294px",
                      borderRadius: "5px",
                      width: phone ? "294px" : "200px",
                    }}
                    onClick={loadMore}
                  >
                    <PiPlus className='size-5 me-1 font-bold' />
                    Load More
                  </PrimaryButton>
                )}
              </div>
              <div
                className='max-tablet:hidden'
                style={{ padding: "8px", flex: "1 1 auto" }}
              >
                <div style={{ height: "3px", background: "#134E4A" }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
