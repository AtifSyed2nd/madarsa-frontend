/** @format */

import React, { useState } from "react";
import Image from "../../../Constants/Image";
import { LinearProgress } from "@mui/material";
import PrimaryButton from "../../Inputs/PrimaryButton";
import { colors } from "../../../Constants/theme";
import {
  PiCoinsLight,
  PiShareFat,
  PiPlantFill,
  PiHandCoinsDuotone,
} from "react-icons/pi";
import { IoHeartHalfSharp } from "react-icons/io5";
import { BsAlarmFill, BsHandIndex } from "react-icons/bs";
import { HiGift } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import SecondaryButton from "../../Inputs/secondaryButton";
import { Link } from "react-router-dom";

import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { MdClose } from "react-icons/md";
import { useAlert } from "../Alerts/Index";

function Index({
  id,
  title,
  img,
  totalDonation,
  days,
  goalAmount,
  actualAmount,
  tags,
}) {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const currentPageUrl = window.location.href;
  const renderTagIcon = (tagName) => {
    switch (
      tagName.trim() // trim to remove any leading/trailing spaces
    ) {
      case "Expiring Soon":
        return <BsAlarmFill color={colors.primary.dark} />;
      case "newly added":
        return <PiPlantFill color={colors.primary.dark} />;
      case "needs support":
        return <IoHeartHalfSharp color={colors.primary.dark} />;
      case "Zakat":
        return <PiHandCoinsDuotone color={colors.primary.dark} />;
      case "Fitra":
        return <BsHandIndex color={colors.primary.dark} />;
      case "Hadiya":
        return <HiGift color={colors.primary.dark} />;
      case "Interest Offloading":
        return <FaRupeeSign color={colors.primary.dark} />;
      default:
        return null;
    }
  };

  const handleShareButtonClick = () => {
    setShowSharePopup(true);
  };
  const addAlert = useAlert();

  const handleCloseSharePopup = () => {
    setShowSharePopup(false);
  };
  const Share_title = "Donate For Good";

  const copyToClipboard = () => {
    let currentURL = window.location.href;
    let isCopy = copy(currentURL);
    if (isCopy) {
      addAlert("Copied to Clipboard", {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <div
        className='w-[345px] max-tablet:max-w-[310px] flex relative flex-col rounded-xl '
        style={{ boxShadow: "0px 4px 6px #00000026" }}
      >
        <Link to={`/Campaign-Details/${id}`} state={{ id: id }}>
          <img src={img} className='h-[265px] rounded-t-xl' alt='' />
        </Link>
        <div className='w-full py-[30px] px-4 flex flex-col justify-between flex-1'>
          <div className='space-y-6'>
            <p className='text-[1.6rem] w-full text-wrap line-clamp-1 max-desktop:text-[1.5rem] max-tablet:text-[1.375rem] font-bold font-roboto text-[#383A42] leading-[36.4px]'>
              {title}
            </p>
            <div className='w-full flex gap-6 items-center'>
              <div className='flex gap-2 items-center'>
                <img src={Image.DonerCard} alt='' />
                <p className='text-[1rem] font-roboto font-normal text-[#6B7280]'>
                  {totalDonation}
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <img src={Image.date} alt='' />
                <p className='text-[1rem] font-roboto font-normal text-[#6B7280]'>
                  {days}
                </p>
              </div>
            </div>
          </div>
          <div className='w-full mt-6'>
            <p className='text-black/40'>
              <span className='font-bold text-black'>₹{actualAmount} </span>
              funded of ₹{goalAmount}
            </p>
            <div className='pt-1 pb-4'>
              <LinearProgress
                variant='determinate'
                sx={{
                  height: "10px",
                  borderRadius: "16px",
                  background: `linear-gradient(to right, #38BDF8, #38BDF8 ${
                    (actualAmount / goalAmount) * 100
                  }%, #e0e0e0 ${(actualAmount / goalAmount) * 100}%)`,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#38BDF8 !important",
                  },
                }}
                value={(actualAmount / goalAmount) * 100}
              />
            </div>
            <div className='w-full flex gap-3'>
              <Link className='w-[50%]' to={`/Donate/${id}`} state={{ id: id }}>
                <PrimaryButton
                  sx={{
                    height: "51px",
                    width: "100%",
                    fontSize: "1.125rem",
                    borderRadius: 2,
                    fontWeight: 500,
                    color: colors.text.main,
                  }}
                >
                  <PiCoinsLight className='me-1 text-[#FFFFFF]' />
                  Donate
                </PrimaryButton>
              </Link>
              <SecondaryButton
                onClick={handleShareButtonClick}
                sx={{
                  height: "51px",
                  width: "50%",
                  fontSize: "1.125rem",
                  borderRadius: 2,
                  fontWeight: 500,
                  border: `1px solid ${colors.primary.dark}`,
                  color: colors.primary.light,
                }}
              >
                <PiShareFat className='me-1 text-[#075985]' />
                Share
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className=' absolute top-3 left-2 flex flex-wrap gap-1'>
          {tags?.map((tag, index) => (
            <div
              key={index}
              className='flex rounded-sm items-center bg-[#ffffffc9] px-2 py-1'
              style={{
                boxShadow: "2px 2px 4px #00000033",
                color: colors.primary.dark,
              }}
            >
              {renderTagIcon(tag)}
              <p className='text-[0.85rem] font-roboto ms-1 font-medium'>
                {tag.trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
      {showSharePopup && (
        <div className='fixed inset-0 flex justify-center items-center z-50 pointer-events-none'>
          <div className='bg-black bg-opacity-50 absolute inset-0'></div>
          <div className='bg-white p-8 rounded-md max-w-md relative pointer-events-auto'>
            <button
              onClick={handleCloseSharePopup}
              className='absolute top-0 right-0 p-2'
            >
              <MdClose size={24} />
            </button>
            <h2 className='text-2xl font-bold mb-4'>Share this link</h2>
            <div className='flex justify-around'>
              <div className='mr-4'>
                <EmailShareButton
                  url={currentPageUrl}
                  subject={Share_title}
                  body='body'
                >
                  <EmailIcon size={45} round />
                </EmailShareButton>
              </div>
              <div className='mr-4'>
                <WhatsappShareButton
                  url={currentPageUrl}
                  title={Share_title}
                  separator=':: '
                >
                  <WhatsappIcon size={45} round />
                </WhatsappShareButton>
              </div>
              <div className='mr-4'>
                <TwitterShareButton url={currentPageUrl}>
                  <TwitterIcon size={45} round />
                </TwitterShareButton>
              </div>
              <div>
                <FacebookShareButton
                  url={currentPageUrl}
                  hashtag={"#Fairseed#EducationForAll#EducationMatters"}
                >
                  <FacebookIcon size={45} round />
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
