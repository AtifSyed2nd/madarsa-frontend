/** @format */

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import Image from "../../../Constants/Image";
import { colors, theme } from "../../../Constants/theme";
import { IoCaretBackOutline } from "react-icons/io5";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import AvatarDropDown from "../AvatarDropDown/Index";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const TemporaryDrawer = styled(MuiDrawer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  zIndex: theme.zIndex.drawer + 1, // Ensure it appears above other elements
}));





let menu = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
    path: "/Admin-Panel/Dashboard",
  },
  {
    name: "Users",
    icon: <PiUsersThreeBold />,
    path: "/Admin-Panel/Users",
  },
  {
    name: "Campaigns",
    icon: <MdOutlineCampaign />,
    path: "/Admin-Panel/Campaigns",
  },
  {
    name: "Campaigns Category",
    icon: <MdOutlineCategory />,
    path: "/Admin-Panel/Campaigns-Category",
  },
  {
    name: "Donations",
    icon: <MdPersonAddAlt />,
    path: "/Admin-Panel/Donations",
  },
  {
    name: "Gallery",
    icon: <GrGallery />,
    path: "/Admin-Panel/Gallery",
  },
  {
    name: "Expenses",
    icon: <BsCashCoin />,
    path: "/Admin-Panel/Expenses",
  },
  {
    name: "Statistics",
    icon: <HiOutlineChartSquareBar />,
    path: "/Admin-Panel/Statistics",
  },
];

export default function MiniDrawer({ children }) {
  const themeMui = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({})


  // Extract the last path segment to use as the title
  const title = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[segments.length - 1]?.replace(/-/g, " ") || "dashboard";
  }, [pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMobileDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileDrawerClose = () => {
    setMobileOpen(false);
  };

  React.useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user_obj")))

  }, []);

  console.log("user", );



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        open={open}
        sx={{
          height: { sx: "4rem", lg: "5rem" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: theme.palette.green.main,
          boxShadow: "0px 4px 6px #00000332",
        }}
      >
        <Toolbar>
          <IconButton
            color='primary.main'
            aria-label='open drawer'
            onClick={handleMobileDrawerOpen}
            edge='start'
            sx={{
              marginRight: { xs: 2, sm: 3, md: 5 },
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <MenuIcon sx={{ color: colors.text.main }} />
          </IconButton>
          <IconButton
            color='primary.main'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: { xs: 2, sm: 3, md: 5 },
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <MenuIcon sx={{ color: colors.text.main }} />
          </IconButton>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{ gap: { xs: "5px", md: "5px", lg: "10px" } }}
            alignItems={"center"}
          >
            <IoCaretBackOutline
              onClick={() => navigate(-1)}
              className='size-11  max-tablet:size-8 bg-white rounded-md max-tablet:rounded-sm'
              style={{
                boxShadow: "2px 4px 4px #00000033",
                color: theme.palette.green.main,
              }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ lineHeight: "17px", paddingTop: { xs: 0, sm: 0, lg: 0 } }}
            >
              <Typography
                variant={"subtitle1"}
                pt={{ md: 0, xs: "4px" }}
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
                noWrap
                component='div'
                color={colors.text.main}
              >
                {title}
              </Typography>
              <Breadcrumbs
                className=' '
                sx={{
                  // display: { xs: "none", sm: "flex" },
                  color: "#ffffff80",
                  fontSize: "0.8rem",
                  fontFamily: "roboto",
                  fontWeight: 500,
                  overflow: "hidden", // Hide overflow text
                  textOverflow: "ellipsis", // Add ellipsis for overflowing text
                  whiteSpace: "nowrap", // Prevent line breaks
                  flexWrap: "nowrap", // Allow wrapping if needed
                  "& .MuiBreadcrumbs-ol .MuiBreadcrumbs-separator ": {
                    marginLeft: "0px",
                    marginRight: "0px",
                  },
                }}
                separator={
                  <NavigateNextIcon
                    sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }}
                    aria-label='breadcrumb'
                  />
                }
                aria-label='breadcrumb'
              >
                {pathname
                  ?.split("/")
                  ?.filter(Boolean)
                  ?.map((item, i) => (
                    <Link
                      underline='hover'
                      style={{ cursor: "pointer" }}
                      key={i}
                      color='inherit'
                    >
                      {item}
                    </Link>
                  ))}
              </Breadcrumbs>
            </Box>
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            position: "relative",
          }}
          display={"flex"}
          flexDirection={"row"}
          gap={1}
          mr={5}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
            <Typography
              className='username'
              color={themeMui.palette.text.main}
              sx={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {userData.username}
            </Typography>
            <Typography
              className='email'
              sx={{
                fontSize: "0.6rem",
                fontWeight: 400,
                color: themeMui.palette.text.main,
              }}
            >
              {userData.email}
            </Typography>
          </Box>
          <AvatarDropDown bgcolor={`#21678d`} logout={true} />
        </Box>
      </AppBar>
      <Drawer
        variant='permanent'
        open={open}
        SlideProps={{
          timeout: {
            enter: 500, // duration in milliseconds for opening
            exit: 300, // duration in milliseconds for closing
          },
        }}
        sx={{
          "& .MuiPaper-root ": {
            background: colors.tertiary.gradient,
            borderRight: "none",
            boxShadow: "4px 0 4px #00000033",
          },
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      >
        <DrawerHeader sx={{ height: { sx: "4rem", lg: "5rem" } }}>
          <Link to='/'>
            <img
              src={Image.NavLogo}
              className='max-tablet:w-[135px] max-tablet:h-[20px] max-tablet:mr-5  w-[170px] h-7'
              alt=''
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu.map((item, index) => (
            <NavLink
              to={item.path}
              key={item.name}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? colors.primary.main : colors.text.light,
              })}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: { sx: 45, sm: 55, md: 60 },
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    "& .MuiListItemText-root .MuiTypography-root": {
                      fontSize: { sx: 14, sm: 16, lg: 16 },
                      fontWeight: 400,
                      fontFamily: "roboto",
                    },
                    "& .MuiListItemIcon-root svg": {
                      color: colors.primary.dark,
                      width: "20px",
                      height: "20px",
                    },
                    "& .MuiListItemIcon-root svg:focus": {
                      color: colors.secondary.light,
                      width: "20px",
                      height: "20px",
                    },
                    "&:focus": {
                      backgroundColor: "white",
                      boxShadow: "2px 2px 4px #00000033",
                      borderRight: "none",
                      "& .MuiListItemText-root": {
                        color: colors.primary.main,
                      },
                      "&:active": {
                        backgroundColor: "white",
                        boxShadow: "2px 2px 4px #00000033",
                        borderRight: "none",
                        color: colors.text.light,
                        "& .MuiListItemText-root": {
                          color: colors.primary.main,
                        },
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    title={item.name}
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        
      </Drawer>
      <TemporaryDrawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleMobileDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: 1300, // Ensure it appears above other elements
            background: colors.tertiary.gradient,
          },
        }}
      >
        <DrawerHeader sx={{ height: { sx: "4rem", lg: "5rem" } }}>
          <Link to='/'>
            <img
              src={Image.NavLogo}
              className='max-tablet:w-[135px] max-tablet:h-[20px] max-tablet:mr-5  w-[170px] h-7'
              alt=''
            />
          </Link>
          <IconButton onClick={handleMobileDrawerClose}>
            {themeMui.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu.map((item, index) => (
            <NavLink
              to={item.path}
              key={item.name}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? colors.primary.main : colors.text.light,
              })}
              onClick={handleMobileDrawerClose}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: { sx: 45, sm: 55, md: 60 },
                    justifyContent: "initial",
                    px: 2.5,
                    "& .MuiListItemText-root .MuiTypography-root": {
                      fontSize: { sx: 14, sm: 16, lg: 16 },
                      fontWeight: 400,
                      fontFamily: "roboto",
                    },
                    "& .MuiListItemIcon-root svg": {
                      color: colors.primary.dark,
                      width: "20px",
                      height: "20px",
                    },
                    "& .MuiListItemIcon-root svg:focus": {
                      color: colors.secondary.light,
                      width: "20px",
                      height: "20px",
                    },
                    "&:focus": {
                      backgroundColor: "white",
                      boxShadow: "2px 2px 4px #00000033",
                      borderRight: "none",
                      "& .MuiListItemText-root": {
                        color: colors.primary.main,
                      },
                      "&:active": {
                        backgroundColor: "white",
                        boxShadow: "2px 2px 4px #00000033",
                        borderRight: "none",
                        color: colors.text.light,
                        "& .MuiListItemText-root": {
                          color: colors.primary.main,
                        },
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Box
          sx={{
            background: colors.text.main,
            py: 1,
            pl: 1,
            display: { xs: "flex", sm: "flex", md: "none" },
            width: "100%",
            position: "relative",
            zIndex: 1200, // Ensure it appears above other elements
          }}
          display={"flex"}
          flexDirection={"row"}
          gap={2}
          mr={5}
          alignItems={"center"}
          justifyContent={"start"}
        >
          <AvatarDropDown bgcolor={`${colors.primary.light}`} logout={true} />

          <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
            <Typography
              className='username'
              color={colors.text.dark}
              sx={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {userData.username}
            </Typography>
            <Typography
              className='email'
              sx={{
                fontSize: "0.6rem",
                fontWeight: 400,
                color: colors.text.dark,
              }}
            >
              {userData.email}
            </Typography>
          </Box>
        </Box>
      </TemporaryDrawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 1, md: 2, lg: 4 },
          overflow: "auto",
          height: "calc(100vh - 64px)",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
