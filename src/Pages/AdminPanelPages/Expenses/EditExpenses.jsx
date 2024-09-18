/** @format */

import { Grid } from "@mui/material";
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

function EditExpenses() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  let { state } = useLocation();
  let { id } = state;
  const addAlert = useAlert();
  const validationSchema = yup.object().shape({
    exp_english_title: yup.string().required("Title name is required"),
    exp_amount: yup.number().required("Number is required"),
    exp_urdu_title: yup.string().required("Title name is required"),
  });
  const { data: Expenses } = useGetAll({
    key: `/records/expenses/${id}/nt/`,
    select: (data) => data?.data,
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setData(data);
    },
  });
  const initialValues = {
    exp_english_title: data?.exp_english_title || "",
    exp_amount: data?.exp_amount || "",
    exp_urdu_title: data?.exp_urdu_title || "",
    is_urgent: data?.is_urgent || false,
  };

  const { mutate: updateExpense } = useCreateOrUpdate({
    url: `/records/expenses/${id}/nt/`,
    method: "put",
    onSuccess: (response) => {
      addAlert(
        "Update Expense  successfully!",
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
        formData.append("exp_english_title", values.exp_english_title);
        formData.append("exp_urdu_title", values.exp_urdu_title);
        formData.append("exp_amount", values.exp_amount);
        formData.append("is_urgent", values.is_urgent);
        updateExpense(formData);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container spacing={{ xs: 2, lg: 4 }}>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='exp_english_title'
                label='Title Name (english)'
                placeholder='Enter title name'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='exp_urdu_title'
                label='(urdu)عنوان کا نام'
                placeholder='Enter title name'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InputField
                name='exp_amount'
                label='Amount'
                type={"number"}
                placeholder='Enter Amount'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <RadioGroup
                name='is_urgent'
                value={values.is_urgent}
                onChange={(e) => {
                  setFieldValue("is_urgent", e.target.value);
                }}
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
                label={"Urgent"}
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

export default EditExpenses;
