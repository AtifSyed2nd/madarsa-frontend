import { createTheme } from "@mui/material";
export const drawerWidth = 273;
export const colors = {
  primary: {
    dark: "#082F49",
    light: "#075985",
    main: "linear-gradient(71deg,#075985 0%, #0284C7 62.9%)",
  },
  secondary: {
    dark: "#E5E5E5",
    light: "#F0F9FF",
    main: "linear-gradient(71deg, #14B2A1 0%, #0B665C 62.9%)",
  },
  tertiary: {
    dark: "#333333",
    light: "#000000",
    main: "#D9D9D999",
    gradient: "#E0F2FE",
  },
  text: {
    dark: "#333333",
    light: "#000000",
    main: "#FFFFFF",
    gradient: "linear-gradient(136.55deg, #38BDF8 15.14%, #075985 64.49%)",
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: "FuturaMedium",
  },
  palette: {
    secondary: {
      dark: colors.tertiary.main,
      main: colors.tertiary.dark,
      light: colors.tertiary.light,
    },
    warning: {
      main: colors.primary.dark,
      contrastText: "#ffffff",
    },
    white: {
      main: "#fff",
    },
    green: {
      main: "#0C4A6E",
      light: "#F0FDFA",
      dark: "#115E59",
    },
    red: {
      main: "#FF0000",
      light: "#9D2828",
    },
  },
});

export const chipColors = {
  backgroundColor: {
    free: "#F0F9FF",
    allocated: "#FFF6F5",
    "dhcp - free": "#F3F4F7",
    "dhcp - allocated": "#F3F4F7",
    "dhcp - reserved": "#F3F4F7",
  },
  color: {
    free: "#082F49",
    allocated: "#FF3248",
    "dhcp - free": "#6B7280",
    "dhcp - allocated": "#6B7280",
    "dhcp - reserved": "#6B7280",
  },
  DotColor: {
    free: "#058681",
    allocated: "#FF3248",
    "dhcp - free": "#058681",
    "dhcp - allocated": "#FF3248",
    "dhcp - reserved": "#6B7280",
  },
};
