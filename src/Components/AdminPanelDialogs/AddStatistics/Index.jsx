/** @format */

import React from "react";
import PrimaryButton from "../../Inputs/PrimaryButton";
import InputField from "../../Inputs/InputField";
import { Form, Formik } from "formik";
import { Dialog } from "../../Layout/dialogBox/dialog";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../Inputs/secondaryButton";
import * as yup from "yup";
import RadioGroup from "../../Inputs/radioGroup";
import { useAlert } from "../../Layout/Alerts/Index";
import { Grid, useMediaQuery } from "@mui/material";
import SelectField from "../../Inputs/SelectField/Index";

const validationSchema = yup.object().shape({
  stat_english_title: yup.string().required("Title name is required"),
  stat_count: yup.number().required("Number is required"),
  stat_urdu_title: yup.string().required("Title name is required"),
});

function AdminPanelDialog({ onSuccess }) {
  const phone = useMediaQuery("(max-width:751px)");

  const { mutate } = useCreateOrUpdate({
    url: "/records/statistics/nt/",
    method: "post",
  });
  const addAlert = useAlert();

  return (
    <div>
      <Dialog
        title={"Add Stats"}
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
            Add stats{" "}
            <HiOutlineChartSquareBar size={20} className='ms-1 text-white' />
          </PrimaryButton>
        }
      >
        {({ onClose }) => (
          <Formik
            initialValues={{
              stat_english_title: "",
              stat_count: "",
              stat_urdu_title: "",
              is_current: false,
              stat_type: "",
              // is_urgent: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const formData = new FormData();
              formData.append("stat_english_title", values.stat_english_title);
              formData.append("stat_urdu_title", values.stat_urdu_title);
              formData.append("stat_count", values.stat_count);
              formData.append("is_current", values.is_current);
              formData.append("stat_type", values.stat_type.value);

              // formData.append("is_urgent", values.is_urgent);
              mutate(formData, {
                onSuccess: (response) => {
                  addAlert(
                    "Add stat successfully!",
                    "success",
                    {
                      vertical: "top",
                      horizontal: "right",
                    },
                    3000
                  );
                  onSuccess();

                  onClose();
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
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className='flex flex-col items-center max-tablet:px-0'>
                <div className='flex w-full flex-wrap gap-4 justify-center items-center gap-y-2 max-tablet:flex-col max-tablet:gap-4'>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='stat_english_title'
                      label='Title Name (english)'
                      placeholder='Enter title name'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='stat_urdu_title'
                      label='(urdu)عنوان کا نام'
                      placeholder='Enter title name'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='stat_count'
                      label='Amount'
                      type={"number"}
                      placeholder='Enter Amount'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <SelectField
                      required
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
                  </div>
                  <div className='max-tablet:w-full w-[94%]'>
                    <div className='w-[49%] max-tablet:w-full'>
                      <RadioGroup
                        name='is_current'
                        // value={values.is_current}
                        onChange={(e) => {
                          setFieldValue(
                            "is_current",
                            e.target.value === "true"
                          );
                        }}
                        options={[
                          { label: "Current", value: true },
                          { label: "Pass Out", value: false },
                        ]}
                        label={"Status"}
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
