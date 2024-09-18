/** @format */

import { Button, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "../../Inputs/PrimaryButton";
import InputField from "../../Inputs/InputField";
import { Form, Formik } from "formik";
import { Dialog } from "../../Layout/dialogBox/dialog";
import { PiUsersBold } from "react-icons/pi";
import SelectField from "../../Inputs/SelectField/Index";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../Inputs/secondaryButton";
import * as yup from "yup";
import { useQueryClient } from "react-query";
import { useAlert } from "../../Layout/Alerts/Index";

const validationSchema = yup.object().shape({
  username: yup.string().required("User name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  user_role: yup.object().required("User role is required"),
  password: yup.string().required("Password is required"),
  contact_no: yup
    .string()
    .matches(/^[0-9]+$/, "Contact number must be only digits")
    .min(10, "Contact number must be exactly 10 digits")
    .max(10, "Contact number must be exactly 10 digits")
    .required("Contact number is required"),
});

function AdminPanelDialog({ onSuccess }) {
  const phone = useMediaQuery("(max-width:751px)");

  const { mutate } = useCreateOrUpdate({
    url: "/user_auth/register/nt/",
    method: "post",
  });

  const queryClient = useQueryClient();
  const addAlert = useAlert();

  return (
    <div>
      <Dialog
        title={"Add User"}
        onClose={() => {}}
        button={
          <PrimaryButton
            sx={{
              height: "45px",
              width: "150px",
              fontSize: "1rem",
              borderRadius: "8px",
              fontWeight: 500,
              color: colors.text.main,
            }}
          >
            Add Users <PiUsersBold size={20} className='ms-1 text-white' />
          </PrimaryButton>
        }
      >
        {({ onClose }) => (
          <Formik
            initialValues={{
              username: "",
              contact_no: "",
              email: "",
              user_role: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const formData = new FormData();
              formData.append("username", values.username);
              formData.append("email", values.email);
              formData.append("contact_no", values.contact_no);
              formData.append("user_role", values.user_role.value);
              formData.append("password", values.password);

              mutate(formData, {
                onSuccess: (response) => {
                  queryClient.refetchQueries(`/user_auth/get-user-list/`);
                  addAlert(
                    "User added successfully!",
                    "success",
                    {
                      vertical: "top",
                      horizontal: "center",
                    },
                    3000
                  );
                  onClose();
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
            }}
          >
            {({ setFieldValue }) => (
              <Form className='flex flex-col items-center max-tablet:px-0'>
                <div className='flex w-full flex-wrap gap-4 justify-center items-center gap-y-4 max-tablet:flex-col max-tablet:gap-4'>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='username'
                      label='User Name'
                      placeholder='Enter user name'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='email'
                      label='Email'
                      type='email'
                      placeholder='Enter email'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='contact_no'
                      label='Contact'
                      type='number'
                      placeholder='Enter password'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <SelectField
                      name='user_role'
                      options={[
                        {
                          label: "Campaign Manager",
                          value: "Campaign Manager",
                        },
                        { label: "Admin", value: "Admin" },
                      ]}
                      label='User Role'
                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                          height: phone ? "45px" : "",
                        },
                      }}
                      placeholder='Select user role'
                    />
                  </div>
                  <div className='max-tablet:w-full w-[94%]'>
                    <div className='w-[49%] max-tablet:w-full'>
                      <InputField
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='Enter password'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-4 mt-12'>
                  <SecondaryButton
                    onClick={onClose}
                    className='w-[69px] h-[32px] border border-[#082F49]'
                    sx={{
                      height: "44px",
                      width: "100px",
                      border: `1px solid ${colors.primary.dark}`,
                      borderRadius: "5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    Cancel
                  </SecondaryButton>
                  <PrimaryButton
                    sx={{
                      height: "44px",
                      width: "100px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                    type='submit'
                  >
                    Save
                  </PrimaryButton>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </Dialog>
    </div>
  );
}

export default AdminPanelDialog;
