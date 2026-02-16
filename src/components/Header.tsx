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
  MidGrey,
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

export const Header = () => {
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mx: "auto",
              maxWidth: "1280px",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="logo" style={logoStyle as any} />

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                width: "90%",
                mr: { sm: 0, md: 1, lg: 9 },
                justifySelf: "flex-end",
                my: 3,
              }}
            >
              <Box>
                <IconButton onClick={(e) => setLangAnchor(e.currentTarget)}>
                  <LanguageIcon />
                  <Typography fontSize="1rem" mr={0.5}>
                    {lang}
                  </Typography>
                  <KeyboardArrowDownIcon />
                </IconButton>

                <Menu
                  anchorEl={langAnchor}
                  open={Boolean(langAnchor)}
                  onClose={() => setLangAnchor(null)}
                >
                  <MenuItem
                    onClick={() => (setLang("عربي"), setLangAnchor(null))}
                  >
                    عربي
                  </MenuItem>
                  <MenuItem
                    onClick={() => (setLang("EN"), setLangAnchor(null))}
                  >
                    EN
                  </MenuItem>
                </Menu>
                <IconButton onClick={(e) => setCityAnchor(e.currentTarget)}>
                  <LocationOnIcon />
                  <Typography fontSize="1rem" mr={0.5}>
                    {city}
                  </Typography>
                  <KeyboardArrowDownIcon />
                </IconButton>

                <Menu
                  anchorEl={cityAnchor}
                  open={Boolean(cityAnchor)}
                  onClose={() => setCityAnchor(null)}
                >
                  <MenuItem
                    onClick={() => (setCity("حمص"), setCityAnchor(null))}
                  >
                    حمص
                  </MenuItem>
                  <MenuItem
                    onClick={() => (setCity("طرطوس"), setCityAnchor(null))}
                  >
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
                      <SearchOutlinedIcon sx={{ MidGrey }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Stack direction="row">
                <Item
                  icon={<ChatOutlinedIcon sx={MidGrey} />}
                  label="الرسائل"
                />
                <Item
                  icon={<FavoriteBorderOutlinedIcon sx={MidGrey} />}
                  label="المفضلة"
                />
                <Item
                  icon={<NotificationsNoneOutlinedIcon sx={MidGrey} />}
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
                <KeyboardArrowDownIcon sx={{ color: "#333" }} />
              </Box>
              <IconButton onClick={toggleDrawer(true, true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar
        position="static"
        sx={{
          ...appBarStyle,
          mt: 0,
          mb: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Toolbar sx={toolbarStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mx: "auto",
              maxWidth: "1280px",
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
              <Avatar>ش</Avatar>
              <Typography sx={{ ...MidGrey, fontSize: "16px" }}>
                شادي الحمصي
              </Typography>
              <KeyboardArrowDownIcon sx={{ ...MidGrey, fontSize: "16px" }} />
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
