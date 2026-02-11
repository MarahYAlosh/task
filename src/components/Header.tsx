import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  Avatar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  appBarStyle,
  toolbarStyle,
  navButtonStyle,
  drawerPaperStyle,
  drawerCloseIconStyle,
  drawerListBoxStyle,
  drawerButtonStyle,
} from "../styles/headerStyles.ts"
import { pagesHeader } from "../data/pagesHeader.ts";



export const Header = () => {


  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleDrawer = (isOpen: boolean | ((prevState: boolean) => boolean)) => (event: { type: string; key: string; }) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };
  return (
    <AppBar position="static" sx={appBarStyle}>
      <Box maxWidth="xl" >
        <Toolbar sx={toolbarStyle}>


          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
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

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar sx={{ width: 40, height: 40 }}>أ</Avatar>
              <Box sx={{ display: "flex", flexDirection: "row", lineHeight: 1, alignItems: "center" }}>
                <Typography fontWeight={600} fontSize="1rem" sx={{ color: "#757779" }}>شادي الحمصي </Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#9CA3AF", mt: "-2px" }} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar sx={{ width: 40, height: 40 }}>أ</Avatar>
              <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <Typography fontWeight={600} fontSize="1rem">أحمد محمد</Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#9CA3AF", mt: "-2px" }} />
              </Box>
            </Box>
          </Box>

        </Toolbar>
      </Box>

      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": drawerPaperStyle }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer(false)} sx={drawerCloseIconStyle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={drawerListBoxStyle}>
          {pagesHeader.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              onClick={toggleDrawer(false)}
              sx={drawerButtonStyle}
            >
              {page.name}
            </Button>
          ))}


        </Box>
      </Drawer>
    </AppBar>

  );
};
