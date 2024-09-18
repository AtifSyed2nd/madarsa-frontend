/** @format */

import { Grid, LinearProgress, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import { colors, theme } from "../../Constants/theme";
import {
  IoArrowBackSharp,
  IoHeartHalfSharp,
  IoTimeOutline,
} from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "../../Constants/Image";
import {
  PiCoins,
  PiHandCoinsDuotone,
  PiPlantFill,
  PiSealCheckDuotone,
  PiShareFat,
  PiUsersThree,
} from "react-icons/pi";
import { MdClose, MdOutlineCampaign } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import SecondaryButton from "../../Components/Inputs/secondaryButton";
import { Form, Formik } from "formik";
import SelectField from "../../Components/Inputs/SelectField/Index";
import InputField from "../../Components/Inputs/InputField";
import { useGetAll } from "../../Hooks/useGetAll";
import { BsAlarmFill, BsHandIndex } from "react-icons/bs";
import { HiGift } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import { useCreateOrUpdate } from "../../Hooks/useCreateOrUpdate";
import * as Yup from "yup";
import useRazorpay from "react-razorpay";
import { useAlert } from "../../Components/Layout/Alerts/Index";
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
function Index() {
  const phone = useMediaQuery("(max-width:751px)");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const [img, setImg] = useState(null);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const currentPageUrl = window.location.href;
  const [Razorpay] = useRazorpay();

  const { data: campaign } = useGetAll({
    key: `campaign/${id}/nt/`,
    enabled: true,
    onSuccess: () => {
      setImg(`${process.env.REACT_APP_FE_URL}${campaign?.image}`);
    },
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
  const initialValues = {
    donationType: "",
    donation_amount: "",
    donor_name: "",
    donor_email: "",
    campaign: "",
    // anonymous: false,
  };

  const validationSchema = Yup.object({
    // donationType: Yup.string().required("Donation type is required"),
    donation_amount: Yup.number()
      .required("Donation amount is required")
      .min(1, "Amount must be at least 1"),
    // donor_name: Yup.string().required("Name is required"),
    // email: Yup.string()
    //   .email("Invalid email address")
    //   .required("Email is required"),
    anonymous: Yup.boolean(),
  });

  const { mutate: payment } = useCreateOrUpdate({
    // url: `payment/create-order/nt/`,
    url: `payment/donation/nt/`,
  });

  const { mutate: post_payment } = useCreateOrUpdate({
    // url: `payment/verify-payment/nt/`,
    url: `payment/verify-donation/nt/`,
  });

  function P_payment(data) {
    post_payment(data, {
      onSuccess: () => {
        addAlert(
          "Payment successfully done!",
          "success",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
        // navigate(-1);
      },
      onError: (error) => {
        addAlert(
          "Failed to process payment. Please try again.",
          "error",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
      },
    });
  }
  const addAlert = useAlert();

  const onSubmit = (values, { resetForm }) => {
    const data = {
      donation_type: values.donationType.value,
      donation_amount: values.donation_amount,
      currency: "INR",
      donor_name: values.donor_name,
      donor_email: values.donor_email,
      campaign: `${id}`,
    };

    payment(data, {
      onSuccess: (response) => {
        let order_id = response?.data?.razorpay_order_id;
        console.log(order_id, "===>response");

        const options = {
          key: "rzp_test_4hB3NbRtr2MgUO",
          name: `Donate to ${campaign?.campaign_name}`,
          description: "Test Transaction",
          image: img,
          order_id: order_id,
          handler: function (response) {
            const paymentData = {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            };
            P_payment(paymentData);
            resetForm();
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: theme.palette.green.main,
          },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          addAlert(
            `Payment failed: ${response.error.description}`,
            "error",
            {
              vertical: "top",
              horizontal: "center",
            },
            3000
          );
        });

        rzp1.open();
      },
      onError: (error) => {
        const errorMessages = error.response?.data
          ? Object.values(error.response.data).flat().join("\n")
          : "An unexpected error occurred.";
        addAlert(
          errorMessages,
          "error",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
      },
    });
  };
  const handleShareButtonClick = () => {
    setShowSharePopup(true);
  };

  const handleCloseSharePopup = () => {
    setShowSharePopup(false);
  };
  const Share_title = "Donate For Good";

  const copyToClipboard = () => {
    let currentURL = window.location.href;
    console.log("currentURLcurrentURLcurrentURL", currentURL);
    let isCopy = copy(currentURL);
    if (isCopy) {
      addAlert("Copied to Clipboard", {
        position: "top-right",
      });
    }
  };
  console.log(campaign?.tags, "=======>TagsName");
  return (
    <>
      <div className=''>
        <NavbarCustom />
        <div className='w-[79.17%] my-28 max-tablet:my-20 m-auto max-desktop:w-[94%] max-tablet:w-[97%]'>
          <div className='flex items-center mb-[40px] max-desktop:mb-[24px] max-tablet:mb-[16]'>
            <IoArrowBackSharp
              onClick={() => {
                navigate(-1);
              }}
              color={`${theme.palette.green.main}`}
              className='size-10 p-1 max-desktop:size-9 max-tablet:size-7 hover:bg-slate-300 me-2 bg-slate-200 rounded-full'
            />
            <p className='font-roboto font-normal text-[36px] max-desktop:text-[28px] max-tablet:text-[1.5rem]'>
              Campaigns
            </p>
          </div>{" "}
          <div className='w-full flex gap-4 max-desktop:flex-col-reverse  max-tablet:flex-col-reverse gap-y-6 '>
            <div className='w-[60%] max-desktop:w-full max-tablet:w-full'>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ handleSubmit }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4 max-tablet:gap-2 w-full'
                  >
                    <Grid
                      container
                      xs={12}
                      spacing={{ xs: 1, md: 2 }}
                      sx={{ paddingLeft: { xs: "0.4rem", lg: "0" } }}
                    >
                      <Grid item xs={12} lg={6}>
                        <SelectField
                          required
                          name='donationType'
                          options={[
                            ...(Array.isArray(campaign?.tags) // Ensure `campaign.tags` is an array before processing
                              ? campaign.tags
                                  .filter(
                                    (item) =>
                                      item !== "newly added" &&
                                      item !== "expiring soon" &&
                                      item !== "need support"
                                  )
                                  .map((item) => ({
                                    label: item,
                                    value: item,
                                  }))
                              : []), // If `campaign.tags` is not an array, use an empty array
                            {
                              label: "general donation",
                              value: "general donation",
                            },
                          ]}
                          label='Donation Type'
                          sx={{
                            "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                              height: phone ? "45px" : "",
                            },
                          }}
                          placeholder='Select donation type'
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputField
                          name='donation_amount'
                          required={true}
                          type={"number"}
                          label='Donation Amount'
                          placeholder='Enter donation amount'
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputField
                          name='donor_name'
                          label='Enter Name'
                          placeholder='Enter name'
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputField
                          name='donor_email'
                          type={"email"}
                          label='Enter Email'
                          placeholder='Enter email address'
                        />
                      </Grid>
                      {/* <Grid item xs={12} sx={{ marginLeft: "0.4rem" }}>
                      <CheckBox
                        label={"Make Anonymous Donation"}
                        name={"anonymous"}
                      />
                    </Grid> */}
                      <Grid item xs={12} mt={3}>
                        <PrimaryButton
                          type='submit'
                          sx={{
                            borderRadius: "10px",
                            border: "1px solid #115E59",
                            width: "100%",
                            height: phone ? "50px" : "55px",
                            fontSize: "18px",
                            textAlign: "center",
                            fontWeight: 500,
                          }}
                        >
                          <PiCoins className='me-2 size-6' />
                          Donate Campaign
                        </PrimaryButton>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </div>
            <div
              className='w-[40%] h-[550px] max-desktop:w-full max-desktop:h-full max-tablet:w-full max-tablet:h-full border-2 rounded-2xl max-tablet:rounded-md flex flex-col font-roboto text-[22px] max-desktop:text-[22px] max-tablet:text-[18px] font-normal  gap-6 max-desktop:gap-4 justify-center items-center py-5 px-3 max-tablet:px-1'
              style={{
                borderColor: theme.palette.green.main,
                background: colors.secondary.light,
                color: colors.text.light,
              }}
            >
              <img src={Image.NavLogo} alt='logo' />

              <div className='w-[70%] max-desktop:max-w-[500px] font-bold text-[48px] max-tablet:text-[36px] text-center'>
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
                  value={
                    (campaign?.fund_raised / campaign?.target_amount) * 100
                  }
                />
              </div>
              <div className='flex justify-center gap-2 max-desktop:max-w-[500px] flex-wrap items-center'>
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
              <div className='flex gap-y-10 max-desktop:max-w-[450px] w-[100%] max-desktop:w-[70%] max-tablet:w-[100%] max-tablet:max-w-[330px]   flex-wrap justify-center max-tablet:justify-center max-desktop:justify-between'>
                <div className='flex gap-2 w-[45%] max-tablet:w-[50%] justify-start  text-start font-roboto'>
                  <MdOutlineCampaign color={`${theme.palette.green.main}`} />
                  <div className='leading-6'>
                    <p className='text-[22px] text-wrap  desktop:text-nowrap   max-tablet:text-[18px] font-roboto font-medium   text-[#404040]'>
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
              <div className='w-[90%] max-desktop:max-w-[500px] space-y-4'>
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
        </div>
        <Footer />
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
