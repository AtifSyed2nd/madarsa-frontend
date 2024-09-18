/** @format */

import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import InputField from "../../../Components/Inputs/InputField";
import UploadField from "../../../Components/Inputs/UploadField/Index";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import SecondaryButton from "../../../Components/Inputs/secondaryButton";
import { colors } from "../../../Constants/theme";
import { Form, Formik } from "formik";
import { useGetAll } from "../../../Hooks/useGetAll";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate"; // Import the hook
import * as yup from "yup";
import RadioGroup from "../../../Components/Inputs/radioGroup";
import errorHandle from "../../../utils/errorHandle";
import { useAlert } from "../../../Components/Layout/Alerts/Index";
function EditCategory() {
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const addAlert = useAlert();

  const navigate = useNavigate();
  let { state } = useLocation();
  let { id } = state;

  const { data: User } = useGetAll({
    key: `/campaign/categories/${id}/nt/`,
    enabled: true,
    select: (data) => data.data,
    onSuccess: (data) => {
      setData(data);
    },
  });

  const { mutate } = useCreateOrUpdate({
    url: `/campaign/categories/${id}/nt/`,
    method: "put",
    onSuccess: (response) => {
      if (Array.isArray(response.data)) {
        setImages((prev) => [...prev, ...response.data]);
      } else {
        setImages((prev) => [...prev, response.data]);
      }
      navigate(-1);
      addAlert(
        "Update Category  successfully!",
        "success",
        {
          vertical: "top",
          horizontal: "center",
        },
        3000
      );
    },
    onError: (error) => {
      addAlert(`${error} error`, "error", {
        vertical: "top",
        horizontal: "center",
      });
    },
  });

  const initialValues = {
    category_title: data?.category_title || "",
    category_id: data?.category_id || "",
    is_active: data?.is_active || false,
    createdAt: data?.createdAt
      ? new Date(data.createdAt).toISOString().split("T")[0]
      : "",
    image: data?.image || null,
  };

  const validationSchema = yup.object().shape({
    category_title: yup.string().required("Category title is required"),
    category_id: yup.string().required("Category ID is required"),
    createdAt: yup.date().required("Creation date is required"),
  });

  const handleSubmit = (values) => {
    console.log(values, "======CategoryData");
    const formData = new FormData();
    formData.append("category_title", values.category_title);
    formData.append("category_id", values.category_id);
    formData.append("is_active", values.is_active || data?.is_active);
    formData.append("createdAt", values.createdAt);
    if (values?.image instanceof File) {
      formData.append("image", values?.image);
    }
    mutate(formData);
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ setFieldValue, values }) => (
        <Form
          className='flex flex-col w-[85%] mt-8 max-tablet:w-full m-auto items-center max-tablet:px-0'
          encType='multipart/form-data'
        >
          <div className='flex w-full flex-wrap gap-4 justify-center items-center gap-y-4 max-tablet:flex-col max-tablet:gap-4'>
            <div className='w-[46%] max-tablet:w-[100%]'>
              <InputField
                name='category_id'
                label='Id'
                disabled
                placeholder='Category Id'
              />
            </div>
            <div className='w-[46%] max-tablet:w-[100%]'>
              <InputField
                name='category_title'
                label='Category Title'
                placeholder='Enter category title'
              />
            </div>
            <div className='w-[46%] max-tablet:w-[100%]'>
              <InputField
                name='createdAt'
                label='Date'
                type='date'
                placeholder='Enter creation date'
              />
            </div>
            <div className='w-[46%] max-tablet:w-[100%]'>
              <UploadField
                name='image'
                label='Upload Images'
                placeholder={data?.image ? data.image.split("/").pop() : ""}
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                value={values.image ? values.image.name : ""}
              />
            </div>
            <div className='w-[93%] flex justify-start max-tablet:w-[100%]'>
              <div className='w-[46%] max-tablet:w-[100%]'>
                <RadioGroup
                  name={"is_active"}
                  type='radio'
                  onChange={(e) => {
                    setFieldValue("is_active", e.target.value);
                  }}
                  options={[
                    { label: "Active", value: true },
                    { label: "Inactive", value: false },
                  ]}
                  value={values?.is_active}
                  label={"User Type"}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-4 '>
            <SecondaryButton
              onClick={() => {
                navigate(-1);
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
  );
}

export default EditCategory;
