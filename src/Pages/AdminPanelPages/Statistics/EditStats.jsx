/** @format */

import { Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../Components/Inputs/InputField";
import RadioGroup from "../../../Components/Inputs/radioGroup";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import SecondaryButton from "../../../Components/Inputs/secondaryButton";
import { colors } from "../../../Constants/theme";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import * as yup from "yup";
import { useGetAll } from "../../../Hooks/useGetAll";
import { useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "../../../Components/Layout/Alerts/Index";
import SelectField from "../../../Components/Inputs/SelectField/Index";

function EditStats() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  let { state } = useLocation();
  let { id } = state;
  const addAlert = useAlert();
  const phone = useMediaQuery("(max-width:751px)");

  const validationSchema = yup.object().shape({
    stat_english_title: yup.string().required("Title name is required"),
    stat_count: yup.number().required("Number is required"),
    stat_urdu_title: yup.string().required("Title name is required"),
  });
  const { data: Stats } = useGetAll({
    key: `/records/statistics/${id}/nt/`,
    select: (data) => data?.data,
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setData(data);
    },
  });
  const initialValues = {
    stat_english_title: data?.stat_english_title || "",
    stat_count: data?.stat_count || "",
    stat_urdu_title: data?.stat_urdu_title || "",
    is_current: data?.is_current || false,
    stat_type: data?.stat_type || "",
  };

  const { mutate } = useCreateOrUpdate({
    url: `/records/statistics/${id}/nt/`,
    method: "put",
    onSuccess: (response) => {
      addAlert(
        "Update stats  successfully!",
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
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append("stat_english_title", values.stat_english_title);
        formData.append("stat_urdu_title", values.stat_urdu_title);
        formData.append("stat_count", values.stat_count);
        formData.append("stat_type", values.stat_type.value || data?.stat_type);
        formData.append("is_current", values.is_current);
        mutate(formData);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container spacing={{ xs: 2, lg: 4 }}>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='stat_english_title'
                label='Title Name (english)'
                placeholder='Enter title name'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='stat_urdu_title'
                label='(urdu)عنوان کا نام'
                placeholder='Enter title name'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='stat_count'
                type={"number"}
                label='Amount'
                placeholder='Enter Amount'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <SelectField
                required
                value={values.stat_type}
                name='stat_type'
                options={[
                  { label: "employee", value: "employee" },
                  { label: "student", value: "student" },
                ]}
                label='Role'
                sx={{
                  "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                    height: phone ? "45px" : "",
                  },
                }}
                placeholder='Select Role'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <RadioGroup
                name='is_current'
                value={values.is_current}
                onChange={(e) => {
                  setFieldValue("is_current", e.target.value);
                }}
                options={[
                  { label: "Current", value: true },
                  { label: "Pass Out", value: false },
                ]}
                label={"Status"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
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
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default EditStats;
