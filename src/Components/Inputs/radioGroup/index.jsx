import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import React from "react";
import { blue, red } from "@mui/material/colors";

import { colors } from "../../../Constants/theme";
import { ErrorMessage } from "formik";

const RadioGroup = ({
  label,
  options,
  onChange,
  required,
  name,
  sx,
  style,
  size,
  ...otherProps
}) => {
  return (
    <FormControl
      sx={{
        display: "flex",
        paddingTop: "15px",
        flexDirection: "col",
        "& .MuiFormLabel-root.Mui-focused": {
          color: colors.text.main,
        },
      }}
    >
      <p
        className="text-capitalize font-medium  flex items-center text-[1.12rem] max-desktop:text-[1.1rem] ml-2 max-tablet:text-[1rem]"
        sx={{
          padding: "4px 8px 0px 18px !important",
          color: colors.text.dark,
          fontWeight: 500,
          fontFamily: "roboto",
          fontStyle: "normal",
          // height: "22px",
          width: "100%",
        }}
        id={`demo-radio-buttons-group-label-${label}`}
      >
        {label}
        {required ? <span className="text-red-600">*</span> : ""}
      </p>
      <MuiRadioGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          pl: "10px",
          pb: "1rem",
          ...sx,
        }}
        {...otherProps}
        aria-labelledby={`demo-radio-buttons-group-label-${label}`}
        name={`radio-buttons-group-${label}`}
        onChange={(e) => {
          onChange && onChange(e);
        }}
      >
        {options?.map((item) => (
          <FormControlLabel
            id={Math.random() < 0.5 ? "select" : undefined}
            {...otherProps?.formControlProps}
            key={item?.value?.toString()}
            value={item.value}
            sx={{
              "& .MuiTypography-root": {
                color: colors.text.dark,
                fontWeight: 500,
                fontFamily: "roboto",
                fontStyle: "normal",
                // height: "22px",
                width: "100%",
                ...style,
              },
            }}
            control={
              <Radio
                color="warning"
                sx={{
                  // color: red[500],
                  "&.Mui-checked": {
                    color: blue[900],
                  },
                }}
              />
            }
            label={item.label}
          />
        ))}
      </MuiRadioGroup>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div
            style={{
              fontFamily: "satoshi",
              color: "red",
              fontSize: "1rem",
              paddingLeft: "5px",
            }}
          >
            {msg}
          </div>
        )}
      />
    </FormControl>
  );
};

export default RadioGroup;
