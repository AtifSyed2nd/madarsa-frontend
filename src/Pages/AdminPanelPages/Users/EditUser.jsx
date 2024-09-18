import { Grid, useMediaQuery } from "@mui/material";
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
import SelectField from "../../../Components/Inputs/SelectField/Index";
import * as yup from "yup";
import { useAlert } from "../../../Components/Layout/Alerts/Index";

function EditUser() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  let { state } = useLocation();
  let { id } = state;
  const phone = useMediaQuery("(max-width:751px)");
  const addAlert = useAlert();
  const { data: User } = useGetAll({
    key: `/user_auth/user/${id}`,
    enabled: true,
    select: (data) => data.data,
    onSuccess: (data) => {
      setData(data);
    },
  });

  const { mutate } = useCreateOrUpdate({
    url: `/user_auth/user/${id}`,
    method: "put",
    onSuccess: (response) => {
      addAlert(
        "Update user  successfully!",
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
      console.log(error, "error=====>");
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
    username: data?.username || "",
    email: data?.email || "",
    contact_no: data?.contact_no || "",
    user_role: data?.user_role || "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("User name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    // user_role: yup.object().required("User role is required"),
    // password: yup.string().required("Password is required"),
    contact_no: yup
      .string()
      .matches(/^[0-9]+$/, "Contact number must be only digits")
      .min(10, "Contact number must be exactly 10 digits")
      .max(10, "Contact number must be exactly 10 digits")
      .required("Contact number is required"),
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("contact_no", values.contact_no);
    formData.append("user_role", values.user_role.value || data?.user_role);
    formData.append("password", values.password);
    mutate(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="flex flex-col w-[85%] max-tablet:w-full m-auto items-center max-tablet:px-0 mt-5">
          <div className="flex w-full flex-wrap gap-4 justify-center items-center gap-y-4 max-tablet:flex-col max-tablet:gap-4">
            <div className="w-[46%] max-tablet:w-[100%]">
              <InputField
                name="username"
                label="User Name"
                placeholder="Enter user name"
              />
            </div>
            <div className="w-[46%] max-tablet:w-[100%]">
              <InputField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="w-[46%] max-tablet:w-[100%]">
              <InputField
                name="contact_no"
                label="Contact"
                placeholder="Enter contact number"
              />
            </div>
            <div className="w-[46%] max-tablet:w-[100%]">
              <SelectField
                name="user_role"
                options={[
                  { label: "Admin", value: "Admin" },
                  { label: "Campaign Manager", value: "Campaign Manager" },
                ]}
                label="User Role"
                value={values?.user_role}
                sx={{
                  "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                    height: phone ? "45px" : "",
                  },
                }}
                placeholder="Select user role"
              />
            </div>
            <div className="max-tablet:w-full w-[93%]">
              <div className="w-[49.5%] max-tablet:w-full">
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-8">
            <SecondaryButton
              onClick={() => {
                navigate(-1);
              }}
              className="w-[69px] h-[32px] border border-[#082F49]"
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
              type="submit"
            >
              Save
            </PrimaryButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditUser;
