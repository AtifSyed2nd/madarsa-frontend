/** @format */

import React, { useContext } from "react";
import { colors, theme } from "../../Constants/theme";
import { Form, Formik } from "formik";
import InputField from "../../Components/Inputs/InputField";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import PrimaryButton from "../../Components/Inputs/PrimaryButton";
import { useMediaQuery } from "@mui/material";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCreateOrUpdate } from "../../Hooks/useCreateOrUpdate";
import AuthContext from "../../context/authContext/AuthContext";
import { useAlert } from "../../Components/Layout/Alerts/Index";
import Image from "../../Constants/Image";

function Index() {
  const tablet = useMediaQuery("(max-width:1366px)");
  const phone = useMediaQuery("(max-width:751px)");
  const navigate = useNavigate();

  const { Login } = useContext(AuthContext);

  const InitialValues = {
    email: "",
    password: "",
  };

  const { mutate } = useCreateOrUpdate({
    url: `/user_auth/login/nt/`,
  });

  const validations = yup.object({
    email: yup
      .string()
      .email()
      .trim("This field cannot include leading and trailing spaces")
      .strict(true)
      .required("Email is required!"),
  });

  const addAlert = useAlert();

  return (
    <>
      <NavbarCustom />
      <div className='flex w-[95%] max-desktop:w-[97%] max-desktop:flex-col max-tablet:flex-col m-auto mt-24 mb-8 gap-8 h-full max-tablet:mt-[4rem] max-tablet:w-full max-desktop:mt-20'>
        <div className='w-1/2 max-desktop:w-full max-tablet:w-full'>
          <img
            src={Image.LoginInImg}
            className='rounded-[15px] bg-contain bg-center object-cover bg-no-repeat w-full h-[800px] max-desktop:h-[344px]  max-tablet:rounded-none max-tablet:h-[180px]'
            alt=''
          />
        </div>
        <div className='w-1/2 max-desktop:w-full max-tablet:w-full flex justify-center items-center'>
          <div className='w'>
            <div className='space-y-12'>
              <p
                className={`text-[1.75rem] max-desktop:text-[2rem] max-tablet:text-[1.5rem] font-roboto font-extrabold text-[${colors.text.dark}]`}
              >
                Welcome back, please sign in !
              </p>
              <Formik
                initialValues={InitialValues}
                validationSchema={validations}
                onSubmit={(values) => {
                  mutate(values, {
                    onSuccess: (data) => {
                      const LoggedIn = Login(data?.data);
                      if (LoggedIn) {
                        navigate("/");
                      }
                      addAlert(
                        "Loged in successfully!",
                        "success",
                        {
                          vertical: "top",
                          horizontal: "center",
                        },
                        3000
                      );
                    },
                    onError: (response) => {
                      addAlert(
                        `${response.response.data.detail}`,
                        "error",
                        {
                          vertical: "top",
                          horizontal: "center",
                        },
                        2000
                      );
                    },
                  });
                }}
              >
                <Form className='space-y-5'>
                  <div className=''>
                    <InputField
                      fontSize={phone ? 16 : tablet ? 18 : 20}
                      name={"email"}
                      label={"Email / Phone Number"}
                      placeholder={"Enter valid details"}
                    />
                  </div>
                  <div className=''>
                    <InputField
                      fontSize={phone ? 16 : tablet ? 18 : 20}
                      name={"password"}
                      type={"password"}
                      label={"Password"}
                      placeholder={"At least 8 characters"}
                    />
                  </div>
                  <div className='w-full pt-8'>
                    <PrimaryButton
                      sx={{
                        width: "100%",
                        background: theme.palette.green.main,
                        height: tablet ? "50px" : "60px",
                        color: colors.text.main,
                        fontSize: tablet ? "1rem" : "1.125rem",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px #00000033",
                      }}
                      type='submit'
                    >
                      Sign in
                    </PrimaryButton>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
