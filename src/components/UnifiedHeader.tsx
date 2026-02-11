import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Stack,
  Drawer,
  Collapse,
  Button,
  Avatar,
} from "@mui/material";
import logo from "../assets/logo.png";
import {
  Menu as MenuIcon,
  SearchOutlined as SearchOutlinedIcon,
  Language as LanguageIcon,
  LocationOn as LocationOnIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ChatOutlined as ChatOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  appBarStyle,
  drawerCloseIconStyle,
  drawerListBoxStyle,
  itemContainerStyle,
  itemLabelStyle,
  logoStyle,
  navButtonStyle,
  searchFieldStyle,
  toolbarStyle,
} from "../styles/headerStyles";
import { pagesHeader } from "../data/pagesHeader";

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

export const UnifiedHeader = () => {
  const location = useLocation();

  const [lang, setLang] = useState("عربي");
  const [city, setCity] = useState("حمص");

  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const [cityAnchor, setCityAnchor] = useState<null | HTMLElement>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDrawer =
    (open: boolean, hideSearch = false) =>
    (event: any) => {
      if (event.type === "keydown" && ["Tab", "Shift"].includes(event.key))
        return;
      if (hideSearch) setShowSearch(false);
      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar position="static" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          <img src={logo} alt="logo" style={logoStyle as any} />

          <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, gap: 2 }}>
            <IconButton onClick={(e) => setLangAnchor(e.currentTarget)}>
              <LanguageIcon />
              <Typography>{lang}</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
            >
              <MenuItem onClick={() => (setLang("عربي"), setLangAnchor(null))}>
                عربي
              </MenuItem>
              <MenuItem onClick={() => (setLang("EN"), setLangAnchor(null))}>
                EN
              </MenuItem>
            </Menu>

            <IconButton onClick={(e) => setCityAnchor(e.currentTarget)}>
              <LocationOnIcon />
              <Typography>{city}</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              anchorEl={cityAnchor}
              open={Boolean(cityAnchor)}
              onClose={() => setCityAnchor(null)}
            >
              <MenuItem onClick={() => (setCity("حمص"), setCityAnchor(null))}>
                حمص
              </MenuItem>
              <MenuItem onClick={() => (setCity("طرطوس"), setCityAnchor(null))}>
                طرطوس
              </MenuItem>
            </Menu>

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

            <Stack direction="row">
              <Item icon={<ChatOutlinedIcon />} label="الرسائل" />
              <Item icon={<FavoriteBorderOutlinedIcon />} label="المفضلة" />
              <Item
                icon={<NotificationsNoneOutlinedIcon />}
                label="الإشعارات"
              />
            </Stack>
          </Box>

          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <Stack flexDirection="row">
              <IconButton onClick={() => setShowSearch(!showSearch)}>
                <SearchOutlinedIcon />
              </IconButton>
              <Collapse in={showSearch}>
                <Box sx={{ px: 2, pb: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="ابحث"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Collapse>
            </Stack>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar>أ</Avatar>
              <Typography sx={{ color: "#333" }}>شادي الحمصي</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <IconButton onClick={toggleDrawer(true, true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar
        position="static"
        sx={{ ...appBarStyle, display: { xs: "none", md: "block" } }}
      >
        <Toolbar sx={toolbarStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              {pagesHeader.map((page) => (
                <Button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  sx={navButtonStyle(location.pathname === page.path)}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar>أ</Avatar>
              <Typography color="secondary">شادي الحمصي</Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <IconButton onClick={toggleDrawer(false)} sx={drawerCloseIconStyle}>
          <CloseIcon />
        </IconButton>

        <Box sx={drawerListBoxStyle}>
          {pagesHeader.map((page) => (
            <Button
              key={page.path}
              component={Link}
              to={page.path}
              onClick={toggleDrawer(false)}
            >
              {page.name}
            </Button>
          ))}

          <Item icon={<ChatOutlinedIcon />} label="الرسائل" />
          <Item icon={<FavoriteBorderOutlinedIcon />} label="المفضلة" />
          <Item icon={<NotificationsNoneOutlinedIcon />} label="الإشعارات" />
          <>
            {" "}
            <IconButton onClick={(e) => setLangAnchor(e.currentTarget)}>
              <LanguageIcon />
              <Typography>{lang}</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
            >
              <MenuItem onClick={() => (setLang("عربي"), setLangAnchor(null))}>
                عربي
              </MenuItem>
              <MenuItem onClick={() => (setLang("EN"), setLangAnchor(null))}>
                EN
              </MenuItem>
            </Menu>
          </>
          <>
            <IconButton onClick={(e) => setCityAnchor(e.currentTarget)}>
              <LocationOnIcon />
              <Typography>{city}</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              anchorEl={cityAnchor}
              open={Boolean(cityAnchor)}
              onClose={() => setCityAnchor(null)}
            >
              <MenuItem onClick={() => (setCity("حمص"), setCityAnchor(null))}>
                حمص
              </MenuItem>
              <MenuItem onClick={() => (setCity("طرطوس"), setCityAnchor(null))}>
                طرطوس
              </MenuItem>
            </Menu>
          </>
        </Box>
      </Drawer>
    </>
  );
};
