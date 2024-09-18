/** @format */

import React, { useState } from "react";
import Image from "../../Constants/Image";
import { theme, colors } from "../../Constants/theme";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import { Avatar, LinearProgress, useMediaQuery } from "@mui/material";
import { PiCoins } from "react-icons/pi";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import { PiSealCheckDuotone } from "react-icons/pi";
import { MdClose, MdOutlineCampaign, MdOutlineReport } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import { IoArrowBackSharp, IoTimeOutline } from "react-icons/io5";
import SecondaryButton from "../../Components/Inputs/secondaryButton";
import { FaRegBookmark } from "react-icons/fa6";
import RecentDonors from "../../Components/Layout/RecentDonors/Index";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAll } from "../../Hooks/useGetAll";
import { PiShareFat, PiPlantFill, PiHandCoinsDuotone } from "react-icons/pi";
import { IoHeartHalfSharp } from "react-icons/io5";
import { BsAlarmFill, BsHandIndex } from "react-icons/bs";
import { HiGift } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";

import { FaRupeeSign } from "react-icons/fa";
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
import { useAlert } from "../../Components/Layout/Alerts/Index";

function Index() {
  const phone = useMediaQuery("(max-width:751px)");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const [showSharePopup, setShowSharePopup] = useState(false);
  const currentPageUrl = window.location.href;

  console.log(id, "======>Id");
  const { data: campaign } = useGetAll({
    key: `campaign/${id}/nt/`,
    enabled: true,
    onSuccess: () => {},
  });

  const image = `${process.env.REACT_APP_FE_URL}${campaign?.image}`;

  const { data: donors } = useGetAll({
    key: `payment/donation/nt/?campaign_id=${campaign?.campaign_id}`,

    enabled: !!campaign?.campaign_id,
  });
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
      <NavbarCustom />
      <div className='w-[90%] m-auto my-28 max-tablet:w-[96%]'>
        <div className='flex items-center'>
          <IoArrowBackSharp
            onClick={() => navigate(-1)}
            color={`${theme.palette.green.main}`}
            className='size-10 p-1 max-desktop:size-9 max-tablet:size-7 hover:bg-slate-300 me-2 bg-slate-200 rounded-full'
          />
          <p className='font-roboto font-normal text-[36px] max-desktop:text-[28px] max-tablet:text-[1.5rem]'>
            Campaigns
          </p>
        </div>
        <h1
          className='text-[2.4rem] max-tablet:text-[1.4rem] max-desktop:text-[1.7rem] font-roboto font-medium mb-2 '
          style={{ color: colors.text.light }}
        >
          {campaign?.campaign_name}
        </h1>
        <div className='flex gap-4 max-desktop:flex-col max-tablet:flex-col items-start '>
          <div className='w-[60%] h-[700px] max-desktop:w-full max-desktop:h-[400px] max-tablet:w-full max-tablet:h-[300px]'>
            <img
              src={image}
              className='w-full h-full rounded-2xl max-tablet:rounded-md bg-center object-cover bg-no-repeat'
              alt='Campaign image'
            />
          </div>
          <div
            className='w-[40%]  max-desktop:w-full max-desktop:h-full max-tablet:w-full max-tablet:h-full border-2 rounded-2xl max-tablet:rounded-md flex flex-col font-roboto text-[22px] max-desktop:text-[22px] max-tablet:text-[18px] font-normal  gap-12 max-desktop:gap-8 max-tablet:gap-8 justify-center items-center py-5 px-3 max-tablet:px-1'
            style={{
              borderColor: theme.palette.green.main,
              background: colors.secondary.light,
              color: colors.text.light,
            }}
          >
            <img src={Image.NavLogo} alt='logo' />

            <div className='w-[70%] font-bold text-[48px] max-tablet:text-[36px] text-center'>
              <p>{campaign?.target_amount}</p>

              <p className='text-[#0006]  text-[22px] max-desktop:text-[22px] max-tablet:text-[18px]'>
                funded of{" "}
                <span style={{ color: colors.text.dark }}>
                  ₹{campaign?.fund_raised}
                </span>
              </p>
              <LinearProgress
                variant='determinate'
                sx={{
                  height: "15px",
                  width: "100%",
                  borderRadius: "16px",
                  background: `linear-gradient(to right, #38BDF8, #38BDF8 ${
                    (campaign?.fund_raised / campaign?.target_amount) * 100
                  }%, #e0e0e0 ${
                    (campaign?.fund_raised / campaign?.target_amount) * 100
                  }%)`,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.green.main,
                  },
                }}
                value={(campaign?.fund_raised / campaign?.target_amount) * 100}
              />
            </div>
            <div className='flex gap-2 flex-wrap justify-center items-center'>
              {campaign?.tags?.map((tag, index) => (
                <div
                  className='py-1.5 px-3 rounded-full text-[14px] items-center flex max-desktop:text-[14px] max-tablet:text-[12px] font-roboto font-medium capitalize gap-1'
                  style={{
                    color: `${theme.palette.green.main}`,
                    background: "#7DD3FC",

                    // color: theme.palette.green.main,
                  }}
                >
                  {renderTagIcon(tag)}
                  {tag.trim()}
                  <PiSealCheckDuotone />
                </div>
              ))}
            </div>
            <div className='flex gap-y-10 w-[80%] max-desktop:w-[70%] max-tablet:w-[100%] max-tablet:max-w-[330px] max-desktop:max-w-[600px]  flex-wrap justify-center max-tablet:justify-center max-desktop:justify-between'>
              <div className='flex gap-2 w-[45%] max-tablet:w-[50%] justify-start  text-start font-roboto'>
                <MdOutlineCampaign color={`${theme.palette.green.main}`} />
                <div className='leading-6'>
                  <p className='text-[22px] text-nowrap max-tablet:text-wrap max-tablet:text-[18px] font-roboto font-medium   text-[#404040]'>
                    Campaign Status
                  </p>
                  <p className='text-[1rem] max-tablet:text-[14px] text-[#737373] font-medium'>
                    {campaign?.campaign_status}
                  </p>
                </div>
              </div>
              <div className='flex gap-2 w-[45%] max-tablet:w-[49%] justify-center text-start font-roboto'>
                <AiOutlineFieldTime color={`${theme.palette.green.main}`} />
                <div className='leading-6'>
                  <p className='text-[22px] text-nowrap max-tablet:text-wrap max-tablet:text-[18px] font-roboto font-medium   text-[#404040]'>
                    Expires On
                  </p>
                  <p className='text-[1rem] max-tablet:text-[14px] text-[#737373] font-medium'>
                    {campaign?.target_date}
                  </p>
                </div>
              </div>
              <div className='flex gap-2  w-[45%] max-tablet:w-[50%] justify-start  text-start font-roboto'>
                <PiUsersThree color={`${theme.palette.green.main}`} />
                <div className='leading-6'>
                  <p className='text-[22px] text-nowrap max-tablet:text-wrap max-tablet:text-[18px] font-roboto font-medium   text-[#404040]'>
                    Total Donors
                  </p>
                  <p className='text-[1rem] max-tablet:text-[14px] text-[#737373] font-medium'>
                    {campaign?.donation_count}
                  </p>
                </div>
              </div>
              <div className='flex gap-2 w-[45%] max-tablet:w-[49%] justify-center  text-start font-roboto'>
                <IoTimeOutline color={`${theme.palette.green.main}`} />
                <div className='leading-6'>
                  <p className='text-[22px] text-nowrap max-tablet:text-wrap max-tablet:text-[18px] font-roboto font-medium   text-[#404040]'>
                    Days Left
                  </p>
                  <p className='text-[1rem] max-tablet:text-[14px] text-[#737373] font-medium'>
                    {campaign?.days_left}
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[90%] space-y-4'>
              <Link
                className='w-[100%]'
                to={`/Donate/${id}`}
                state={{ id: id }}
              >
                <PrimaryButton
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid #115E59",
                    width: "100%",
                    height: phone ? "50px" : "60px",
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  <PiCoins className='me-2 size-6' />
                  Support Campaign
                </PrimaryButton>
              </Link>
              <SecondaryButton
                onClick={handleShareButtonClick}
                sx={{
                  borderRadius: "10px",
                  // borderColor: theme.palette.green.main,
                  border: "2px solid #0C4A6E",
                  width: "100%",
                  height: phone ? "50px" : "60px",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: 500,
                  color: theme.palette.green.main,
                }}
              >
                <PiShareFat className='me-2 size-6' />
                Share
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className='flex gap-4 max-desktop:flex-col max-tablet:flex-col items-start mt-5  max-tablet:mt-2 space-y-5 max-tablet:space-y-2 '>
          <div className='w-[60%]  max-desktop:w-full px-2 py-4  max-tablet:w-full '>
            <div className='w-full flex max-tablet:flex-wrap max-tablet:space-y-2 mb-5 max-tablet:mb-3 justify-between items-center '>
              <div className='items-center flex gap-2'>
                <Avatar />
                <div className='font-medium font-roboto leading-[20px]'>
                  <p className='text-[22px] max-tablet:text-[18px] text-[#404040]'>
                    Firstname Lastname
                  </p>
                  <p className='text-[#737373]  text-[1rem] max-tablet:text-[14px] font-normal'>
                    5 campaigns posted
                  </p>
                </div>
              </div>
              <div className='flex gap-2 items-center max-tablet:w-full justify-end max-tablet:flex-wrap'>
                <PrimaryButton
                  onClick={handleShareButtonClick}
                  sx={{
                    borderRadius: "50px",
                    fontSize: phone ? "14px" : "1rem",
                    color: colors.text.main,
                    fontWeight: 500,
                    height: phone ? "43px" : "50px",
                  }}
                >
                  <PiShareFat className='me-2' /> Share
                </PrimaryButton>
                <PrimaryButton
                  sx={{
                    borderRadius: "50px",
                    fontSize: phone ? "14px" : "1rem",
                    color: colors.text.main,
                    fontWeight: 500,
                    height: phone ? "43px" : "50px",
                  }}
                >
                  <FaRegBookmark className='me-2' /> Bookmark
                </PrimaryButton>
                <SecondaryButton
                  sx={{
                    borderRadius: "50px",
                    background: "#FFCCCC",
                    width: "115px",
                    border: "none",
                    fontSize: phone ? "14px" : "1rem",
                    color: "#D40000",
                    fontWeight: 500,
                    height: phone ? "43px" : "50px",
                  }}
                >
                  <MdOutlineReport className='me-1 size-6' /> Report
                </SecondaryButton>
              </div>
            </div>
            <div
              className='w-full font-roboto rounded-[10px] p-4 mt-5 max-tablet:mt-2 text-[#404040] text-[1rem]'
              dangerouslySetInnerHTML={{
                __html: campaign?.campaign_description,
              }}
              style={{ background: colors.secondary.light }}
            ></div>
          </div>
          <div className='w-[40%] px-2 max-desktop:w-full max-tablet:w-full'>
            <RecentDonors data={donors?.rows} />
          </div>
        </div>
      </div>
      <Footer />
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
