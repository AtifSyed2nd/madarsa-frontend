/** @format */

import React from "react";
import { alpha } from "@mui/material/styles";
import {
  FormLabel,
  InputBase,
  TextField,
  Tooltip,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ErrorMessage, useField } from "formik";
// import { colors, theme } from "../../../constants/theme";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { colors, theme } from "../../../Constants/theme";

// Rest of the component code...

const InputField = ({
  name,
  variant,
  fontSize,
  info,
  CustomInfoIcon,
  infoText,
  characterCount,
  label,
  multiple = false,
  Size,
  style,
  top,
  disabled = false,
  // multiple = false,
  sx,
  required,
  type, // Adding type prop
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const [showPassword, setShowPassword] = React.useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const tablet = useMediaQuery("(max-width:1366px)");
  const phone = useMediaQuery("(max-width:751px)");

  const styles = {
    "label + &": {
      marginTop: "0.3rem",
    },
    "& .MuiInputBase-input": {
      borderRadius: "10px",
      border: `2px solid ${theme.palette.green.main}`,
      // fontFamily: "roboto !important",
      padding: "0 16px",
      // borderTopLeftRadius: configTextfield?.startAdornment ? "0px" : "4px",
      // borderBottomLeftRadius: configTextfield?.startAdornment ? "0px" : "4px",
      position: "relative",
      backgroundColor: colors.secondary.light,
      // border: "1px solid #e2e2e2",
      fontSize: tablet ? "0.875rem" : "1rem",
      width: "100%",
      height: phone ? "42px" : " 48px",

      // ...sx,
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      fontFamily: ["roboto"].join(","),
      "&:focus": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.20);`,
        borderColor: theme.palette.green.main,
      },

      // "&.Mui-disabled": {
      //   backgroundColor: configTextfield?.disabledBgColor
      //     ? configTextfield?.disabledBgColor
      //     : "#F5F5F5",
      //   fontSize: "0.9rem !important",
      // },
    },
    "& input::placeholder": {
      fontSize: tablet ? "0.875rem" : "1rem",
      fontStyle: "roboto",
    },
    // "& .MuiInputBase-input.Mui-disabled": {
    //   WebkitTextFillColor: configTextfield?.disabledColor
    //     ? configTextfield?.disabledColor
    //     : "#00000099",
    // },
    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
      backgroundColor: colors.secondary.light,
      padding: "21px 12px",
      fontSize: tablet ? "0.875rem" : "1rem",
      marginLeft: "0px",
      // borderTopRightRadius: theme.shape.borderRadius + "px",
      // borderBottomRightRadius: theme.shape.borderRadius + "px",
    },
    "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
      // backgroundColor: theme.palette.divider,
      padding: "21px 12px",
      fontSize: tablet ? "0.875rem" : "1rem",
      marginRight: "0px",
      // borderTopLeftRadius: theme.shape.borderRadius + "px",
      // borderBottomLeftRadius: theme.shape.borderRadius + "px",
    },
    ...sx,
  };

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: variant ? variant : "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helpertext = meta.error;
  }

  let textFieldConfig = {
    variant,
    InputLabelProps: { shrink: true },
    fullWidth: true,
    ...otherProps,
    sx: { ...styles, ...otherProps.sx },
  };

  if (name) {
    //eslint-disable-next-line
    const [field, meta] = useField(name || "");
    textFieldConfig = {
      ...field,
      ...textFieldConfig,
    };

    if (meta && meta.touched && meta.error) {
      textFieldConfig.error = true;
      textFieldConfig.helperText = meta.error;
    }
  }

  return (
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
      <div className='relative'>
        <InputBase
          multiline={multiple}
          disabled={disabled}
          sx={styles}
          type={
            type === "password" && !showPassword
              ? "password"
              : type === "date"
              ? "date"
              : type === "number"
              ? "number"
              : "text"
          }
          {...textFieldConfig}
        />

        {/* Conditionally render icons section */}
        {type !== "date" && (
          <div
            className={`absolute right-[20px] top-[26px] max-tablet:top-[23px]`}
          >
            {type === "password" && (
              <InputAdornment position='end'>
                <IconButton
                  color={theme.palette.green.main}
                  aria-label='toggle password visibility'
                  onClick={togglePasswordVisibility}
                  edge='end'
                >
                  {showPassword ? (
                    <VisibilityIcon
                      className='text-[#0C4A6E] w-[18.53px] h-[16px]'
                      color={theme.palette.green.dark}
                    />
                  ) : (
                    <VisibilityOffIcon
                      className='text-[#0C4A6E] w-[18.53px] h-[16px]'
                      color={theme.palette.green.dark}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            )}
          </div>
        )}
      </div>

      <ErrorMessage
        name={name}
        render={(msg) => (
          <div
            style={{
              fontFamily: "roboto",
              color: "red",
              fontSize: tablet ? "0.875rem" : "1rem",
              paddingLeft: "5px",
            }}
          >
            {msg}
          </div>
        )}
      />
    </>
  );
};

export default InputField;
