/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Box, Grid, useMediaQuery } from "@mui/material";
import moment from "moment/moment";
import { useLocation, useNavigate } from "react-router-dom";
import DropZone from "../../../Components/Inputs/ImageCropper/CropDrop";
import { ImageCropper } from "../../../Components/Inputs/ImageCropper/ImageCropper";
import SelectField from "../../../Components/Inputs/SelectField/Index";
import TextEditor from "../../../Components/Inputs/TextEditor/Index";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../../Components/Inputs/secondaryButton";
import { useGetAll } from "../../../Hooks/useGetAll";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import AuthContext from "../../../context/authContext/AuthContext";
import InputField from "../../../Components/Inputs/InputField";
import { ImagePreviewDialog } from "../../../Components/Inputs/ImageCropper/ImagePreview";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import { useAlert } from "../../../Components/Layout/Alerts/Index";
import MultiSelectField from "../../../Components/Inputs/MultipleSelectField";

function AdminPanelDialog({ onSuccess }) {
  const phone = useMediaQuery("(max-width:751px)");
  const [openCrop, setOpenCrop] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const [initialLoading, setInitialLoading] = useState(true); // New state
  const { user } = useContext(AuthContext);
  const user_id = user.user_id;
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  let { state } = useLocation();
  let { id } = state;
  const addAlert = useAlert();

  // Load the campaign data
  const { data: campaign } = useGetAll({
    key: `/campaign/${id}/nt/`,
    select: (data) => data?.data,
    onSuccess: (data) => {
      setData(data);

      // Only set the image on initial load
      if (initialLoading) {
        let img = `${process.env.REACT_APP_FE_URL}${data?.image}`;
        setSrcImg(img);
        setInitialLoading(false);
      }
    },
  });

  const onChange = (e) => {
    let files;
    if (e) {
      files = e;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSrcImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setOpenCrop(true);
  };

  const initialValues = {
    campaign_id: data?.campaign_id,
    campaign_name: data?.campaign_name || "",
    target_amount: data?.target_amount || "",
    categories: data?.categories.category_title || "",
    tags: data?.tags
      ? data.tags.map((tag) => ({ label: tag, value: tag }))
      : [], // Transforming tags to the required format
    target_date: data?.target_date || "",
    image: data?.image || null,
    campaign_status: data?.campaign_status || "",
    campaign_description: data?.campaign_description || "",
  };

  const { data: CampaignCategory } = useGetAll({
    key: `/campaign/categories/nt/`,
    select: (data) => data?.data?.row,
    onSuccess: (data) => {},
  });

  const { mutate } = useCreateOrUpdate({
    url: `/campaign/${id}/nt/`,
    method: "put",
    onSuccess: (response) => {
      addAlert(
        "Update Campaign successfully!",
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={yup.object().shape({
          campaign_name: yup.string().required("Campaign name is required"),
          target_amount: yup.number().required("Target amount is required"),
          target_date: yup.date().required("Target date is required"),
          campaign_description: yup
            .string()
            .required("Campaign description is required"),
        })}
        onSubmit={(values) => {
          const formData = new FormData();
          formData.append("campaign_name", values.campaign_name);
          formData.append(
            "categories",
            values.categories.value || data?.categories.category_id
          );
          formData.append("target_amount", values.target_amount);
          if (values?.image instanceof File) {
            formData.append("image", values?.image);
          }
          formData.append("target_date", values.target_date);
          formData.append(
            "campaign_status",
            values.campaign_status.value || data?.campaign_status
          );
          formData.append("campaign_description", values.campaign_description);
          formData.append("user_id", user_id);

          if (values.tags.length > 0) {
            for (let i = 0; i < values.tags.length; i++)
              formData.append("tags", values.tags[i].value);
          }

          mutate(formData);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Grid container spacing={{ xs: 2 }}>
              <Grid item xs={12}>
                <Box className='w-[50%] max-desktop:w-[70%] max-tablet:w-[95%] m-auto flex flex-col items-center'>
                  <DropZone
                    name='image'
                    onChange={onChange}
                    initialPreview={srcImg}
                  />
                  {openCrop && (
                    <ImageCropper
                      srcImg={srcImg}
                      setOpenCrop={setOpenCrop}
                      setsrcImg={setSrcImg}
                    />
                  )}
                  {srcImg && <ImagePreviewDialog croppedImage={srcImg} />}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <InputField
                  required={true}
                  disabled
                  value={values?.campaign_id}
                  name='campaign_id'
                  label='User Id:'
                  placeholder='Enter campaign title'
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <InputField
                  required={true}
                  value={values?.campaign_name}
                  name='campaign_name'
                  label='Campaign title:'
                  placeholder='Enter campaign title'
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <InputField
                  required={true}
                  name='target_amount'
                  label='Amount to be raised:'
                  value={values?.target_amount}
                  type='number'
                  placeholder='Enter Amount'
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <MultiSelectField
                  required={true}
                  name='tags'
                  options={[
                    { label: "Zakat ", value: "Zakat" },
                    { label: "Fitra", value: "Fitra" },
                    {
                      label: "Interest Offloading ",
                      value: "Interest Offloading",
                    },
                    {
                      label: "Hadiya ",
                      value: "Hadiya",
                    },
                  ]}
                  label='Tags:'
                  sx={{
                    "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                      height: phone ? "45px" : "",
                    },
                  }}
                  value={values?.tags}
                  placeholder='Select Tags'
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={4}>
                <SelectField
                  value={values.categories}
                  required
                  name='categories'
                  options={CampaignCategory?.map((item, index) => ({
                    label: item?.category_title,
                    value: item?.category_id,
                  }))}
                  label='Categories:'
                  sx={{
                    "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                      height: phone ? "45px" : "",
                    },
                  }}
                  placeholder="Select Category's"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <SelectField
                  required
                  name='campaign_status'
                  options={[
                    { label: "pending", value: "pending" },
                    { label: "active", value: "active" },
                    { label: "complete", value: "complete" },
                  ]}
                  label='Status'
                  placeholder='Select campaign status'
                  value={values?.campaign_status}
                  sx={{
                    "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                      height: phone ? "45px" : "",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextEditor
                  label='Campaign Description'
                  value={values?.campaign_description}
                  name='campaign_description'
                  onChange={(data) =>
                    setFieldValue("campaign_description", data)
                  }
                  placeholder='Type something here'
                  rows={10}
                />
              </Grid>
              <Grid item xs={12}>
                <Box className='flex justify-center items-center w-full gap-2'>
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
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AdminPanelDialog;
