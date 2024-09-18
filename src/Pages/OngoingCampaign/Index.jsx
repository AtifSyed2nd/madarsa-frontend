/** @format */

import React, { useState, useEffect } from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import Image from "../../Constants/Image";
import { colors, theme } from "../../Constants/theme";
import Filters from "../../Components/Layout/Filters/Index";
import CategoriesCard from "../../Components/Layout/CategoriesCard/Index";
import { useMediaQuery } from "@mui/material";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import { PiMinus, PiPlus } from "react-icons/pi";
import SecondaryButton from "../../Components/Inputs/secondaryButton/index";
import Card from "../../Components/Layout/Card/Index";
import { useGetAll } from "../../Hooks/useGetAll";
import { Loader } from "../../Components/Layout/Card/CardLoader"; // Assume you have a loader component
import { Link } from "react-router-dom";
import { Campaign } from "@mui/icons-material";

function Index() {
  const phone = useMediaQuery("(max-width:751px)");
  const tablet = useMediaQuery("(max-width:1366px)");

  const [visibleCards, setVisibleCards] = useState(tablet ? 2 : phone ? 2 : 4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState([]);

  const tagParams = selectedTitles
    .map((tag) => `${encodeURIComponent(tag)}`)
    .join(",");

  const url = `/campaign/active/nt/?limit=${visibleCards}${
    tagParams ? `&tag_name=${tagParams}` : ""
  }`;

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

  const loadMore = () => {
    setVisibleCards((prev) => prev + 4);
  };

  const loadLess = () => {
    setVisibleCards(tablet ? 2 : phone ? 2 : 4);
  };

  return (
    <div className=''>
      <NavbarCustom />
      <div className='w-full pt-[3.5rem]'>
        <img
          src={Image.CampaignImg}
          className='w-full object-cover bg-bottom bg-no-repeat max-tablet:h-[200px] max-desktop:h-[300px] h-[600px]'
          alt=''
        />
      </div>
      <div className='w-[79.17%] max-desktop:w-[700px] max-tablet:w-[90%] max-tablet:max-w-[500px] m-auto items-center py-[100px] max-desktop:py-[80px] max-tablet:py-[60px] flex flex-col gap-[40px] max-desktop:gap-[32px] max-tablet:gap-[20px]'>
        <div className='leading-8 text-center'>
          <p className='font-roboto font-normal text-[2rem] max-desktop:text-[1.7rem] max-tablet:text-[1.5rem]'>
            ~Donate to~
          </p>
          <h1
            className='text-[2.25rem] uppercase max-tablet:text-[1.5rem] max-desktop:text-[1.875rem] font-extrabold font-roboto'
            style={{ color: colors.text.light }}
          >
            Ongoing Campaigns
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
            ) : (
              campaignData?.map((item, index) => {
                let image = `${process.env.REACT_APP_FE_URL}${item.image}`;
                return (
                  <div
                    key={index}
                    className='transition-transform transform duration-500 ease-in-out scale-95 opacity-0 animate-fadeIn'
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Card
                      tags={item?.tags}
                      img={image}
                      id={item?.campaign_id}
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
              {visibleCards === campaignData?.length ? (
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
                  onClick={loadLess}
                >
                  <PiMinus className='size-5 me-1 font-bold' />
                  See Less
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
          <CategoriesCard />
          {/* <div className='w-full max-tablet:items-center mt-20 max-tablet:mt-14 max-tablet:flex-col flex justify-center gap-[21px]'>
            <Link to={"/contact-us"}>
              <SecondaryButton
                sx={{
                  color: colors.text.dark,
                  fontFamily: "roboto",
                  fontWeight: 400,
                  borderRadius: "10px",
                  boxShadow: "2px 4px 6px #00000040",
                  height: "60px",
                  fontSize: "1.125rem",
                  width: phone ? "100%" : "250px",
                  border: `1px solid ${theme.palette.green.main}`,
                }}
              >
                Contact us
              </SecondaryButton>
            </Link>
            <PrimaryButton
              sx={{
                color: colors.text.main,
                fontFamily: "roboto",
                boxShadow: "2px 4px 6px #00000040",
                fontWeight: 400,
                borderRadius: "10px",
                background: theme.palette.green.main,
                height: "60px",
                fontSize: "1.125rem",
                width: phone ? "100%" : "250px",
              }}
            >
              Donate us
            </PrimaryButton>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
