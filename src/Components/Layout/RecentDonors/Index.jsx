/** @format */

import React, { useState } from "react";
import { colors, theme } from "../../../Constants/theme";
import { Avatar, Divider, useMediaQuery } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import SecondaryButton from "../../Inputs/secondaryButton";

function Index({ data }) {
  const phone = useMediaQuery("(max-width:751px)");
  const defaultDonations = 6;
  const [loadMore, setLoadMore] = useState(defaultDonations);

  const handleShowMore = () => {
    if (loadMore >= data.length) {
      setLoadMore(defaultDonations);
    } else {
      setLoadMore(loadMore + 4);
    }
  };

  return (
    <div className='w-full justify-start'>
      <p
        className='text-[28px] mb-12 max-desktop:mb-8 max-tablet:mb-8 max-tablet:text-[1.5rem] font-bold font-roboto'
        style={{ color: colors.text.gradient }}
      >
        Recent Donors:
      </p>
      {data?.slice(0, loadMore).map((item, index) => (
        <React.Fragment key={index}>
          <Divider />
          <div className='py-6 flex justify-between max-tablet:flex-col max-tablet:items-start items-center'>
            <div className='items-center flex gap-2'>
              <Avatar />
              <div className='font-medium font-roboto leading-[22px]'>
                <p className='text-[22px] max-tablet:text-[18px] text-[#404040]'>
                  {item?.donor_name === "" ? "Anonymous" : item?.donor_name}
                </p>
                <p className='text-[#737373] text-[1rem] max-tablet:text-[14px] font-normal'>
                  {item?.donation_date}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-end leading-6 max-tablet:w-full max-tablet:mt-2'>
              <p className='flex items-center text-[24px] max-tablet:text-[18px] font-roboto font-bold'>
                +{" "}
                <span className='flex items-center text-[#1ABD54]'>
                  <FaRupeeSign className='' /> {item?.donation_amount}
                </span>
              </p>
              <p className='text-[18px] max-tablet:text-[1rem] text-[#404040] font-normal'>
                received via Upi
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
      {data?.length === 0 ? (
        ""
      ) : (
        <SecondaryButton
          sx={{
            background: colors.secondary.light,
            height: phone ? "50px" : "62px",
            fontSize: phone ? "18px" : "20px",
            width: "100%",
            fontWeight: 700,
            border: `1px solid ${theme.palette.green.main}`,
          }}
          onClick={handleShowMore}
        >
          {loadMore >= data?.length ? "View Less -" : "Show More +"}
        </SecondaryButton>
      )}
    </div>
  );
}

export default Index;
