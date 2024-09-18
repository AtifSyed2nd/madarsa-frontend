/** @format */

import React, { useState } from "react";
import PrimaryButton from "../../Inputs/PrimaryButton";
import UploadField from "../../Inputs/UploadField/Index";
import InputField from "../../Inputs/InputField";
import { Form, Formik } from "formik";
import { Dialog } from "../../Layout/dialogBox/dialog";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../Inputs/secondaryButton";
import * as yup from "yup";
import { Category } from "@carbon/icons-react";
import RadioGroup from "../../Inputs/radioGroup/index";
import { useAlert } from "../../Layout/Alerts/Index";
import { useQueryClient } from "react-query";

function AdminPanelDialog({ onSuccess }) {
  const [images, setImages] = useState([]);
  const addAlert = useAlert();
  const { mutate } = useCreateOrUpdate({
    url: "/campaign/categories/nt/",
    method: "post",
  });

  const validationSchema = yup.object().shape({
    category_title: yup.string().required("Category title is required"),
    // image: yup.mixed().required("Images are required"),
  });
  const queryClient = useQueryClient();
  return (
    <div>
      <Dialog
        title={"Add Category"}
        onClose={() => {}}
        button={
          <PrimaryButton
            sx={{
              height: "45px",
              fontSize: "1rem",
              borderRadius: "8px",
              fontWeight: 500,
              color: colors.text.main,
            }}
          >
            Add Category <Category size={20} className='ms-1 text-white' />
          </PrimaryButton>
        }
      >
        {({ onClose }) => (
          <Formik
            initialValues={{ category_title: "", image: null, is_active: null }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const formData = new FormData();
              formData.append("image", values.image[0]);
              formData.append("category_title", values.category_title);
              formData.append("is_active", values?.is_active === "true");

              mutate(formData, {
                onSuccess: () => {
                  addAlert("Create Category  successfully!", "success", {
                    vertical: "top",
                    horizontal: "center",
                  });
                  queryClient.refetchQueries(`/campaign/categories/nt/`);

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
                <div className='flex w-full flex-wrap gap-4 items-center max-tablet:flex-col max-tablet:gap-4'>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='category_title'
                      label='Category Title'
                      placeholder='Enter category title'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <UploadField
                      placeholder={"Upload Photo"}
                      name='image'
                      label='Upload Images'
                      multiple
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files);
                      }}
                    />
                  </div>
                  <div className='w-[100%] flex justify-start max-tablet:w-[100%]'>
                    <div className='w-[46%] max-tablet:w-[100%]'>
                      <RadioGroup
                        name={"is_active"}
                        onChange={(e) => {
                          setFieldValue("is_active", e.target.value);
                        }}
                        options={[
                          { label: "Active", value: true },
                          { label: "Inactive", value: false },
                        ]}
                        label={"Status"}
                      />
                    </div>
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
