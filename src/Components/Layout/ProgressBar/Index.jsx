import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { colors, theme } from "../../../Constants/theme";

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{
          color: theme.palette.green.dark, // Color of the progress bar
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
            strokeWidth: "4px",
            // Set gray color for the remaining progress
          },
          "& .MuiCircularProgress-svg": {
            // This is to apply the gray color for the remaining progress bar
            stroke: "gray",
          },
        }}
      />
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: theme.palette.green.dark }} />
            <stop offset="100%" style={{ stopColor: "red" }} />
          </linearGradient>
        </defs>
      </svg>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontFamily: "roboto", fontSize: 12, fontWeight: 400 }}
          variant="caption"
          component="div"
          color={colors.text.light}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

FacebookCircularProgress.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default FacebookCircularProgress;
