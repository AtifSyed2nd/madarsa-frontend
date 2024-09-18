/** @format */

import React from "react";
import { colors } from "../../Constants/theme";
import Image from "../../Constants/Image";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import InputField from "../../Components/Inputs/InputField/index";
import { Form, Formik } from "formik";
import { IconButton, useMediaQuery } from "@mui/material";
import Navbar from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import { heIL } from "@mui/material/locale";
import { BorderRight } from "@mui/icons-material";
import { useAlert } from "../../Components/Layout/Alerts/Index";

function Index() {
  const tablet = useMediaQuery("(max-width:1366px)");
  const phone = useMediaQuery("(max-width:751px)");
  const addAlert = useAlert();

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        addAlert(
          "Copied!",
          "info",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
      },
      (err) => {
        addAlert(
          `Field to copy!`,
          "error",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className='mt-20 w-[75%] max-desktop:w-[95%] max-tablet:w-[96%] mx-auto flex flex-col items-center'>
        <p
          className=' py-16 text-[2.25rem] max-desktop:text-[1.875rem] max-tablet:text-[1.5rem] font-extrabold font-roboto uppercase max-desktop:py-20 max-tablet:py-14'
          style={{ color: colors.text.light }}
        >
          Contact Us
        </p>
        <div className='w-full gap-10 flex max-desktop:flex-col max-tablet:flex-col'>
          <div className='w-1/2 max-desktop:w-full max-tablet:w-full space-y-8 max-tablet:space-y-4'>
            <h1
              className='text-[2.25rem] max-desktop:text-[1.875rem] max-tablet:text-[1.5rem] font-extrabold font-roboto uppercase'
              style={{
                background: colors.text.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </h1>
            <div
              className='relative w-full flex gap-4 py-6 items-center max-tablet:py-3 px-4 max-tablet:px-2 rounded-[10px]'
              style={{
                boxShadow: "0px 4px 6px #00000026",
                background: colors.tertiary.gradient,
              }}
            >
              <img
                src={Image.Location}
                className=' max-tablet:w-[35px] max-tablet:h-[50px] px-4 max-tablet:px-1'
                alt=''
              />
              <div
                className='space-y-2 max-tablet:space-y-1'
                style={{ color: colors.text.dark }}
              >
                <div className='flex justify-between items-center'>
                  <p className='text-[1.75rem] max-desktop:text-[1.5rem] max-tablet:text-[1.25rem] font-bold font-roboto'>
                    Our Location
                  </p>
                </div>
                <div className='flex items-center gap-4 max-tablet:gap-0'>
                  <p className='text-[1.125rem] max-w-[258px] text-wrap max-tablet:text-[0.9rem]  font-normal font-roboto'>
                    Konark Indrayu, Kondhwa, Pune, Maharashtra, IND - 411048
                  </p>

                  <IconButton
                    style={{
                      backgroundColor: colors.primary.main,
                      color: colors.primary.dark,
                    }}
                    // onClick={handleDeleteClick}
                  >
                    <FaRegCopy
                      className='size-5'
                      onClick={() => {
                        handleCopyClick(
                          "Konark Indrayu, Kondhwa, Pune, Maharashtra, IND - 411048"
                        );
                      }}
                    />
                  </IconButton>
                </div>
              </div>
              <div className='absolute top-6 right-4 max-tablet:top-3 max-tablet:right-1'>
                <IconButton
                  style={{
                    backgroundColor: colors.primary.main,
                    color: colors.primary.dark,
                  }}
                  // onClick={handleDeleteClick}
                >
                  <IoIosShareAlt className='w-[25px] h-[23.67px]  ' />
                </IconButton>
              </div>{" "}
            </div>
            <div
              className='relative w-full flex gap-4 py-6 items-center max-tablet:py-3 px-4 rounded-[10px]'
              style={{
                boxShadow: "0px 4px 6px #00000026",
                background: colors.tertiary.gradient,
              }}
            >
              <img
                src={Image.email}
                className='px-2 max-tablet:w-[48px] max-tablet:h-[47.94px] max-tablet:px-0'
                alt=''
              />
              <div className='space-y-0 ' style={{ color: colors.text.dark }}>
                <div className='flex justify-between items-center '>
                  <p className='text-[1.75rem] max-desktop:text-[1.5rem] max-tablet:text-[1.25rem] font-bold font-roboto'>
                    E-mail Address{" "}
                  </p>
                </div>
                <div className='flex items-center gap-4 max-tablet:gap-1'>
                  <p className='text-[1.125rem] max-tablet:text-[0.9rem] text-nowrap font-normal font-roboto'>
                    info@madrasa-rasheedia.org
                  </p>
                  <IconButton
                    style={{
                      marginTop: "0 !important",
                      backgroundColor: colors.primary.main,
                      color: colors.primary.dark,
                    }}
                    // onClick={handleDeleteClick}
                  >
                    <FaRegCopy
                      className='size-5'
                      onClick={() => {
                        handleCopyClick("info@madrasa-rasheedia.org");
                      }}
                    />
                  </IconButton>
                </div>
                <div className='flex items-center gap-4 max-tablet:gap-1'>
                  <p className='text-[1.125rem] max-tablet:text-[0.9rem] text-nowrap font-normal font-roboto'>
                    contact@madrasa-rasheedia.org{" "}
                  </p>

                  <IconButton
                    style={{
                      backgroundColor: colors.primary.main,
                      color: colors.primary.dark,
                    }}
                    // onClick={handleDeleteClick}
                  >
                    <FaRegCopy
                      className='size-5'
                      onClick={() => {
                        handleCopyClick("contact@madrasa-rasheedia.org");
                      }}
                    />
                  </IconButton>
                </div>
              </div>
              <div className='absolute top-6 right-4 max-tablet:top-3 max-tablet:right-1'>
                <IconButton
                  style={{
                    backgroundColor: colors.primary.main,
                    color: colors.primary.dark,
                  }}
                  // onClick={handleDeleteClick}
                >
                  <IoIosShareAlt className='w-[25px] h-[23.67px]  ' />
                </IconButton>
              </div>
            </div>
            <div
              className='relative w-full flex gap-4 py-6 items-center max-tablet:py-3 px-4 rounded-[10px]'
              style={{
                boxShadow: "0px 4px 6px #00000026",
                background: colors.tertiary.gradient,
              }}
            >
              <img
                src={Image.ContactNo}
                className=' max-tablet:w-[37.15px] max-tablet:h-[50px] px-4 max-tablet:px-1'
                alt=''
              />
              <div
                className='space-y-0  text-start'
                style={{ color: colors.text.dark }}
              >
                <div className='flex justify-between items-center'>
                  <p className='text-[1.75rem] max-desktop:text-[1.5rem] max-tablet:text-[1.25rem] font-bold font-roboto'>
                    Contact Number{" "}
                  </p>
                </div>
                <div className='flex items-center gap-4 max-tablet:gap-1'>
                  <p className='text-[1.125rem] max-tablet:text-[0.9rem] text-nowrap font-normal font-roboto'>
                    +91 123-456-7890{" "}
                  </p>

                  <IconButton
                    style={{
                      backgroundColor: colors.primary.main,
                      color: colors.primary.dark,
                    }}
                    // onClick={handleDeleteClick}
                  >
                    <FaRegCopy
                      className='size-5'
                      onClick={() => {
                        handleCopyClick("+91 123-456-7890");
                      }}
                    />
                  </IconButton>
                </div>
                <div className='flex items-center gap-4 max-tablet:gap-1'>
                  <p className='text-[1.125rem] max-tablet:text-[0.9rem] text-nowrap font-normal font-roboto'>
                    +91 987-654-3210{" "}
                  </p>

                  <IconButton
                    style={{
                      backgroundColor: colors.primary.main,
                      color: colors.primary.dark,
                    }}
                    // onClick={handleDeleteClick}
                  >
                    <FaRegCopy
                      className='size-5'
                      onClick={() => {
                        handleCopyClick("+91 987-654-3210");
                      }}
                    />
                  </IconButton>
                </div>
              </div>
              <div className='absolute top-6 right-4 max-tablet:top-3 max-tablet:right-1'>
                <IconButton
                  style={{
                    backgroundColor: colors.primary.main,
                    color: colors.primary.dark,
                  }}
                  // onClick={handleDeleteClick}
                >
                  <IoIosShareAlt className='w-[25px] h-[23.67px]  ' />
                </IconButton>
              </div>{" "}
            </div>
          </div>
          <Formik>
            <Form className='w-1/2 max-desktop:w-full max-tablet:w-full max-desktop:flex max-tablet:flex max-desktop:flex-col max-tablet:flex-col max-desktop:items-center max-tablet:items-center space-y-7 max-tablet:space-y-4'>
              <h1
                className='text-[2.25rem] max-desktop:text-[1.875rem] max-tablet:text-[1.5rem] font-extrabold font-roboto uppercase'
                style={{
                  background: colors.text.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Enquire us about
              </h1>
              <div className='w-full'>
                <InputField
                  fontSize={phone ? 20 : tablet ? 24 : 28}
                  name={"name"}
                  label={"Enter name"}
                  placeholder={"Enter your full name"}
                />
              </div>
              <div className='w-full'>
                <InputField
                  fontSize={phone ? 20 : tablet ? 24 : 28}
                  name={"email"}
                  label={"Enter e-mail address"}
                  placeholder={"Enter valid e-mail address"}
                />
              </div>
              <div className='w-full'>
                <InputField
                  fontSize={phone ? 20 : tablet ? 24 : 28}
                  name={"feedback"}
                  label={"Enter feedback/message"}
                  placeholder={"Enter your message or provide a feedback"}
                  multiple
                  rows={9}
                />
              </div>
              <PrimaryButton
                sx={{
                  width: tablet ? "200px" : "150px",
                  height: "48px",
                  fontSize: tablet ? 18 : 16,
                  BorderRadius: 10,
                  fontWeight: 500,
                  "&:hover": {
                    boxShadow: "4px 4px 6px #00000333",
                    background: colors.primary.light,
                  },
                }}
              >
                Submit
              </PrimaryButton>
            </Form>
          </Formik>
        </div>
      </div>
      <div className='mt-8 mb-[100px] max-desktop:mb-[80px] max-tablet:mb-[60px] google-map w-[75%] max-desktop:w-[95%] max-tablet:w-[96%] mx-auto flex flex-col items-center'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin'
          // width="600"
          height='450'
          frameBorder='0'
          // style={{ border: 1 }}
          allowFullScreen=''
          aria-hidden='false'
          className='w-full border border-[#082F49] rounded-xl'
          tabIndex='0'
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Index;
