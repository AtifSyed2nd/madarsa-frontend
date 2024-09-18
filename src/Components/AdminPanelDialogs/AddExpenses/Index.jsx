/** @format */

import React from "react";
import PrimaryButton from "../../Inputs/PrimaryButton";
import InputField from "../../Inputs/InputField";
import { Form, Formik } from "formik";
import { Dialog } from "../../Layout/dialogBox/dialog";
import { Money } from "@carbon/icons-react";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../Inputs/secondaryButton";
import * as yup from "yup";
import RadioGroup from "../../Inputs/radioGroup";
import { useAlert } from "../../Layout/Alerts/Index";

const validationSchema = yup.object().shape({
  exp_english_title: yup.string().required("Title name is required"),
  exp_amount: yup.number().required("Number is required"),
  exp_urdu_title: yup.string().required("Title name is required"),
});

function AdminPanelDialog({ onSuccess }) {
  const { mutate } = useCreateOrUpdate({
    url: "/records/expenses/nt/",
    method: "post",
  });
  const addAlert = useAlert();

  return (
    <div>
      <Dialog
        title={"Add Expense"}
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
            Add Expenses <Money size={20} className='ms-1 text-white' />
          </PrimaryButton>
        }
      >
        {({ onClose }) => (
          <Formik
            initialValues={{
              exp_english_title: "",
              exp_amount: "",
              exp_urdu_title: "",
              is_urgent: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const formData = new FormData();
              formData.append("exp_english_title", values.exp_english_title);
              formData.append("exp_urdu_title", values.exp_urdu_title);
              formData.append("exp_amount", values.exp_amount);
              formData.append("is_urgent", values.is_urgent);
              mutate(formData, {
                onSuccess: (response) => {
                  addAlert(
                    "Add expense successfully!",
                    "success",
                    {
                      vertical: "top",
                      horizontal: "center",
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
                      name='exp_english_title'
                      label='Title Name (english)'
                      placeholder='Enter title name'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='exp_urdu_title'
                      label='(urdu)عنوان کا نام'
                      placeholder='Enter title name'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <InputField
                      name='exp_amount'
                      type={"number"}
                      label='Amount'
                      placeholder='Enter Amount'
                    />
                  </div>
                  <div className='w-[46%] max-tablet:w-[100%]'>
                    <RadioGroup
                      name='is_urgent'
                      value={values.is_urgent}
                      onChange={(e) => {
                        setFieldValue("is_urgent", e.target.value === "true");
                      }}
                      options={[
                        { label: "Yes", value: true },
                        { label: "No", value: false },
                      ]}
                      label={"Urgent"}
                    />
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
