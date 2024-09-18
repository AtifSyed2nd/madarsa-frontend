/** @format */

import { ErrorMessage, useField, useFormikContext } from "formik";
import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors, theme } from "../../../Constants/theme";
import { FaAngleDown } from "react-icons/fa6";

const useStyles = makeStyles({
  textField: {
    // minHeight: '5px',
    border: "none",
    "& .MuiInput-root": {
      margin: "0px",
      height: "10px",
      fontSize: "0.6rem",

      border: ` 2px solid ${theme.palette.green.main}`,
      background: "#fff",
      "&::before": {
        display: "none",
      },
      "&::after": {
        display: "none",
      },
    },

    "& input::placeholder": {
      fontSize: "1rem",
    },
    "& .Mui-disabled": {
      fontSize: "1rem !important",
    },
  },
  root: {
    "& .MuiInputBase-root.MuiOutlinedInput-root ": {
      // padding: "15px 15px",
      fontSize: "1rem",
      background: colors.secondary.light,
      borderRadius: "10px",
      border: ` 2px solid ${theme.palette.green.main}`,
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root .MuiAutocomplete-input": {
      height: "15px",
      border: "none",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      // background: colors.secondary.light,
      // height: '10px'
    },
  },
});

const SelectField = ({
  name,
  options,
  value,
  sx,
  fontSize,
  disable,
  onChange,
  required = false,
  info,
  placeholder,
  onInputChange,
  noLabel,
  sideBarSelectfield,
  label,
  color,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const { textField, root } = useStyles();

  let textFieldConfig = {
    fullWidth: true,
    sx: {
      "& .MuiInputBase-root": {
        padding: "0px 0px",
      },
      ...otherProps.sx,
    },
    ...otherProps,
  };
  let setFieldTouched = (field, isTouched, shouldValidate = true) => {};
  let setFieldValue = (name, value, shouldValidate = true) => {};

  if (name) {
    //eslint-disable-next-line
    const [field, meta] = useField(name || "");
    //eslint-disable-next-line
    const ctx = useFormikContext();

    setFieldValue = ctx.setFieldValue;
    setFieldTouched = ctx.setFieldTouched;
    textFieldConfig = {
      ...field,
      ...textFieldConfig,
    };
    if (meta && meta.touched && meta.error) {
      textFieldConfig.error = true;
      textFieldConfig.helperText = meta.error;
    }
  }
  const onChangeInner = (e, value, option) => {
    if (name && setFieldValue) {
      setFieldValue(name, value);
      setFieldTouched(name, true, true);
    }
    if (onChange) {
      return onChange(e, value, option);
    }
  };

  const { values } = useFormikContext();

  return (
    <>
      <Autocomplete
        {...textFieldConfig}
        value={value}
        sx={{
          ...sx,
          width: "100%",
          border: "none",
          "&.Mui-focused .MuiFormControl-root .MuiOutlinedInput-notchedOutline":
            {
              boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15)`,
              // borderColor: theme.palette.green.main,
              border: "none",
            },
          "& .MuiFormControl-root .MuiOutlinedInput-notchedOutline": {
            // borderColor: theme.palette.green.main,
            border: "none",
          },
        }}
        options={options ? options : []}
        disabled={disable}
        // getOptionLabel={(option) => option?.location}
        className={root}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        onChange={(_, value, reason) => {
          onChange ? onChange(value, reason) : setFieldValue(name, value);
        }}
        onBlur={() => setFieldTouched(name, true)}
        popupIcon={
          <FaAngleDown className='w-6 h-6' color={theme.palette.green.main} />
        }
        renderInput={(props) => (
          <>
            {label && (
              <p
                className='text-capitalize font-medium flex items-center text-[1.12rem] max-desktop:text-[1.1rem] max-tablet:text-[1rem]'
                style={{
                  padding: "4px 8px 0px 8px",
                  color: colors.text.dark,
                  fontWeight: 500,
                  fontFamily: "roboto",
                  fontStyle: "normal",
                  // height: "22px",
                  width: "100%",
                }}
              >
                {label}
                {required ? <span className='text-red-600'>*</span> : ""}
              </p>
            )}

            <TextField
              className={textField}
              variant='outlined'
              {...props}
              onChange={onChangeInner}
              disabled={disable}
              // onChange={(e) => {
              //   props?.onChange && props?.onChange(e);
              //   onInputChange && onInputChange(e);
              // }}
              placeholder={placeholder}
            />
          </>
        )}
      />

      <ErrorMessage
        name={name}
        render={(msg) => (
          <div
            style={{
              color: "red",
              fontSize: "1rem",
              paddingLeft: "5px",
              fontFamily: "roboto",
            }}
          >
            {typeof msg === "object" ? Object?.values(msg)[0] : msg}
          </div>
        )}
      />
    </>
  );
};

export default SelectField;
