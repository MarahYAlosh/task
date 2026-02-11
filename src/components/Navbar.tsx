import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  MenuItem,
  Stack,
  InputAdornment,
  TextField,
  Collapse,
  Menu,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  appBarStyle,
  toolbarStyle,
  drawerPaperStyle,
  drawerCloseIconStyle,
  drawerListBoxStyle,
  itemContainerStyle,
  itemLabelStyle,

  logoStyle,
  topActionsStyle,
  iconButtonStyle,
  searchFieldStyle,
  navbarIconsStyle,
  mobileTopActionsStyle,
  desktopContainerStyle,
} from "../styles/headerStyles"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";


const Item = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => (
  <Box sx={itemContainerStyle} onClick={onClick}>
    {icon}
    <Typography variant="caption" sx={itemLabelStyle}>
      {label}
    </Typography>
  </Box>
);

export const Navbar = () => {

  const [lang, setLang] = useState("عربي");
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);

  const [city, setCity] = useState("حمص");
  const [cityAnchor, setCityAnchor] = useState<null | HTMLElement>(null);


  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean | ((prevState: boolean) => boolean), hideSearch = false) => (event: { type: string; key: string; }) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (hideSearch) setShowSearch(false);

    setOpen(isOpen);
  };
  return (
    <AppBar position="static" sx={appBarStyle}>
      <Toolbar sx={toolbarStyle}>
        <Box sx={desktopContainerStyle}>
          <img src={logo} alt="logo" style={logoStyle as any} />

          <Box sx={topActionsStyle}>
            <IconButton
              sx={iconButtonStyle}
              onClick={(e) => setLangAnchor(e.currentTarget)}
            >
              <LanguageIcon />
              <Typography>{lang}</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
              disableScrollLock
            >
              <MenuItem onClick={() => (setLang("عربي"), setLangAnchor(null))}>
                عربي
              </MenuItem>
              <MenuItem onClick={() => (setLang("EN"), setLangAnchor(null))}>
                EN
              </MenuItem>
            </Menu>
            <IconButton
              sx={iconButtonStyle}
              onClick={(e) => setCityAnchor(e.currentTarget)}
            >
              <LocationOnIcon />
              <Typography>{city}</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              anchorEl={cityAnchor}
              open={Boolean(cityAnchor)}
              onClose={() => setCityAnchor(null)}
              disableScrollLock
            >
              <MenuItem onClick={() => (setCity("حمص"), setCityAnchor(null))}>
                حمص
              </MenuItem>
              <MenuItem onClick={() => (setCity("طرطوس"), setCityAnchor(null))}>
                طرطوس
              </MenuItem>
            </Menu>
          </Box>


          <TextField
            placeholder="ابحث"
            sx={searchFieldStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Stack direction="row" sx={navbarIconsStyle}>
            <Item
              icon={<ChatOutlinedIcon sx={{ color: "#757779" }} />}
              label="الرسائل"

            />
            <Item
              icon={<FavoriteBorderOutlinedIcon sx={{ color: "#757779" }} />}
              label="المفضلة"

            />
            <Item
              icon={<NotificationsNoneOutlinedIcon sx={{ color: "#757779" }} />}
              label="الإشعارات"

            />
          </Stack>
        </Box>

        <Box sx={mobileTopActionsStyle}>
          <IconButton onClick={() => setShowSearch(!showSearch)}>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton onClick={toggleDrawer(true, true)}>
            <MenuIcon />
          </IconButton>

          <Collapse in={showSearch}>
            <Box
              sx={{ px: 2, pb: 1, display: { xs: "flex", md: "none" } }}
            >
              <TextField
                autoFocus
                placeholder="ابحث"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchOutlinedIcon sx={{ color: "#444" }} />
                    </InputAdornment>
                  ),
                  sx: { textAlign: "right" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    minWidth: 200,
                    height: "2.5rem",
                    backgroundColor: "#fff",

                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#b0b0b0",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(0,0,0,0.15)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.15)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.09)",
                      borderWidth: "2px",
                      boxShadow: "0 0 8px rgba(25,118,210,0.4)",
                    },
                  },
                }}
              />
            </Box>
          </Collapse>


        </Box>
      </Toolbar>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false, false)}
        sx={{ "& .MuiDrawer-paper": drawerPaperStyle }}
      >
        <IconButton sx={drawerCloseIconStyle} onClick={toggleDrawer(false, false)}>
          <CloseIcon />
        </IconButton>

        <Box sx={drawerListBoxStyle}>
          <Item
            icon={<ChatOutlinedIcon />}
            label="الرسائل"
          />
          <Item
            icon={<FavoriteBorderOutlinedIcon />}
            label="المفضلة"
          />
          <Item
            icon={<NotificationsNoneOutlinedIcon />}
            label="الإشعارات"
          />
        </Box>
      </Drawer>
    </AppBar>
  );
};
