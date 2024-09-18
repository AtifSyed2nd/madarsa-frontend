import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout"; // Renamed to avoid confusion
import AuthContext from "../../../context/authContext/AuthContext";

export default function AccountMenu({ logout, bgcolor }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { Logout } = useContext(AuthContext); // Correct useContext hook
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdminPanelClick = () => {
    handleClose();
    navigate("/Admin-Panel/Dashboard");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 35, height: 35, background: bgcolor || "" }}
              src=""
              alt=""
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            "& .MuiList-root": {
              paddingTop: logout === true ? 0 : "",
              paddingBottom: logout === true ? 0 : "",
            },
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {logout ? (
          <MenuItem onClick={Logout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleAdminPanelClick}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Admin Panel
            </MenuItem>
            <MenuItem onClick={Logout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        )}
      </Menu>
    </React.Fragment>
  );
}
