/** @format */

import { Grid } from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../Components/Inputs/InputField";
import UploadField from "../../../Components/Inputs/UploadField/Index";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import SecondaryButton from "../../../Components/Inputs/secondaryButton/index";
import { colors } from "../../../Constants/theme";
import { Form, Formik } from "formik";
import { useGetAll } from "../../../Hooks/useGetAll";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate"; // Import the hook
import { useAlert } from "../../../Components/Layout/Alerts/Index";

function EditGallery() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  let { state } = useLocation();
  let { id } = state;
  const [images, setImages] = useState([]);
  const addAlert = useAlert();
  const { data: Gallery } = useGetAll({
    key: `/records/images/${id}/nt/`,
    enabled: true,
    select: (data) => {
      return data.data;
    },
    onSuccess: (data) => {
      setData(data);
    },
  });

  const { mutate } = useCreateOrUpdate({
    url: `/records/images/${id}/nt/`,
    method: "put",
    onSuccess: (response) => {
      addAlert(
        "Update Gallery successfully!",
        "success",
        {
          vertical: "top",
          horizontal: "center",
        },
        3000
      );
      navigate(-1);
    },
    onError: (error) => {
      addAlert(
        `${error}error`,
        "error",
        {
          vertical: "top",
          horizontal: "center",
        },
        3000
      );
    },
  });

  const initialValues = {
    image_id: data?.image_id || "",
    image_title: data?.image_title || "",
    image: data?.image || null,
  };

  // const handleSubmit = (values) => {
  //   const formData = new FormData();
  //   formData.append("image_title", values.image_title);
  //   if (values.image) {
  //     formData.append("image", values.image);
  //   }

  //   mutate({ data: formData });
  // };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => {
        const formData = new FormData();
        if (values?.image instanceof File) {
          formData.append("image", values?.image);
        }
        formData.append("image_title", values.image_title);
        mutate(formData);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container spacing={{ xs: 2, lg: 4 }}>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                disabled
                name='image_id'
                label='Id'
                placeholder='Enter image id'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='image_title'
                label='Image Title'
                placeholder='Enter image title'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <UploadField
                name='image'
                label='Upload Images'
                placeholder={data?.image ? data.image.split("/").pop() : ""}
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                value={values.image ? values.image.name : []}
              />
            </Grid>
            <Grid
              item
              xs={12}
              mt={{ xs: 2, md: 0 }}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              gap={4}
            >
              <SecondaryButton
                onClick={() => navigate(-1)}
                className='w-[69px] h-[32px] border border-[#082F49]'
                sx={{
                  height: "44px",
                  width: "120px",
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
                  width: "120px",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
                type='submit'
              >
                Save
              </PrimaryButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default EditGallery;
