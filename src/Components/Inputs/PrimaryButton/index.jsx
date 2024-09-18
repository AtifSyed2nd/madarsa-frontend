/** @format */

import { Button, CircularProgress } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, sx, isLoading, ...otherProps }) => {
  return (
    <Button
      variant='contained'
      color={"warning"}
      sx={{
        fontFamily: "roboto",
        // color: "#fff",
        // boxShadow: "none",
        // height: "36px",
        // fontSize: {
        //   xs: "0.6rem",
        //   md: "0.8rem",
        // },
        background: "#0C4A6E",
        color: "white",
        alignitems: "flex-start",
        textTransform: "none",
        borderRadius: "3px",
        fontStyle: "normal",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          boxShadow: "2px 4px 4px 2px #00000040",

          background: "#075985",
        },
        ...sx,
      }}
      {...otherProps}
    >
      {isLoading && <CircularProgress size={20} className='me-2 text-white ' />}
      {children}
    </Button>
  );
};

export default PrimaryButton;
