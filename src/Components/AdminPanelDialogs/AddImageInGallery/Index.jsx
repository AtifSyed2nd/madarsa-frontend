/** @format */

import { Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "../../Inputs/PrimaryButton";
import UploadField from "../../Inputs/UploadField/Index";
import InputField from "../../Inputs/InputField";
import { Form, Formik } from "formik";
import { green } from "@mui/material/colors";
import { Dialog } from "../../Layout/dialogBox/dialog";
import { IoCameraOutline } from "react-icons/io5";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../Inputs/secondaryButton";
import * as yup from "yup";
import { useAlert } from "../../Layout/Alerts/Index";
import { useQueryClient } from "react-query";

function AdminPanelDialog({ onSuccess }) {
  const [images, setImages] = useState([]);

  const { mutate } = useCreateOrUpdate({
    url: "/records/images/nt/",
    method: "post",
  });

  const validationSchema = yup.object().shape({
    image_title: yup.string().required("Image title is required"),
    // image: yup.mixed().required("Images are required"),
  });
  const queryClient = useQueryClient();

  const addAlert = useAlert();

  return (
    <div>
      <Dialog
        title={"Upload Images"}
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
            Add Image <IoCameraOutline size={20} className='ms-1 text-white' />
          </PrimaryButton>
        }
      >
        {({ onClose }) => (
          <Formik
            initialValues={{ image_title: "", image: null }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const formData = new FormData();
              formData.append("image", values.image[0]);
              formData.append("image_title", values.image_title);
              // console.log(formData, "dataaaaaaaaaaaaaaaaaaaa");

              mutate(formData, {
                onSuccess: (response) => {
                  queryClient.refetchQueries(`/records/images/nt/`);

                  if (Array.isArray(response.data)) {
                    setImages((prev) => [...prev, ...response.data]);
                  } else {
                    setImages((prev) => [...prev, response.data]);
                  }
                  addAlert(
                    "Add gallery image successfully!",
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
              <Form className='flex flex-col items-center px-4 max-tablet:px-0'>
                <div className='flex w-full gap-4 items-center max-tablet:flex-col max-tablet:gap-4'>
                  <div className='w-[50%] max-tablet:w-[100%]'>
                    <InputField
                      name='image_title'
                      label='Image Title'
                      placeholder='Enter image title'
                    />
                  </div>
                  <div className='w-[50%] max-tablet:w-[100%]'>
                    <UploadField
                      // placeholder={"Upload Photo"}
                      name='image'
                      label='Upload Images'
                      multiple
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files);
                      }}
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-4 mt-12'>
                  <SecondaryButton
                    onClick={() => {
                      onClose();
                    }}
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
