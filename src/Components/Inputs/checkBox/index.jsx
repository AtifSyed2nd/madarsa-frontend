/** @format */

import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  useMediaQuery,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { blue, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { colors } from "../../../Constants/theme";
import { ErrorMessage } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "300 !important",

    "& .css-ahj2mt-MuiTypography-root": {
      fontFamily: "FuturaLight",
      fontWeight: "300",
    },
    "& .MuiFormControlLabel-label": {
      fontWeight: "300",
      fontSize: "0.8rem",
    },
    // margin: "0 !important",
  },
}));

const CheckBox = ({
  style,
  name,
  label,
  legend,
  checked,
  onChange,
  fontSize,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const tablet = useMediaQuery("(max-width:1366px)");

  const { root } = useStyles();

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    ...otherProps,
    onChange: onChange || handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          label={label}
          sx={{
            "& .MuiFormControlLabel-label": {
              color: colors.text.dark,
              fontSize: tablet ? "0.9rem" : "1.1rem",
              color: colors.text.dark,
              fontWeight: "500 !important",
              fontFamily: "roboto !important",
              fontStyle: "normal !important",
              // height: "22px",
              width: "100% !importants",
              justifyContent: "center !important",
              alignItems: "center !important",
            },
          }}
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: blue[900],
                },
              }}
              checked={checked}
              {...configCheckbox}
            />
          }
        />
      </FormGroup>
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

export default CheckBox;
