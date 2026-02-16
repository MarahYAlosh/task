import type { SxProps } from "@mui/system";
import type { Theme } from "@mui/material/styles";

export const appBarStyle: SxProps<Theme> = {
  backgroundColor: "#fff",
  boxShadow: "0 0px 0px rgba(0,0,0,0.05)",
  my: 3,
  height: "65px",
};

export const toolbarStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  minHeight: 80,
};

export const iconButtonStyle: SxProps<Theme> = {
  p: 0.5,
};

export const desktopContainerStyle: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
};

export const logoStyle: SxProps<Theme> = {
  width: "80px",
  height: "80px",
  mx: "3rem",
  // marginTop:"12px",
  // marginBottom:"12px"
};

export const topActionsStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 3,
};

export const searchFieldStyle: SxProps<Theme> = {
  width: { lg: "506px", md: "400px", sm: "350px" },
  height: "57px",
  alignSelf: "center",
  "& .MuiInputAdornment-positionEnd": {
  marginLeft: 0,
},

  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    height: "100%",
    backgroundColor: "rgba(234,234,235,0.2)",
    "& fieldset": {
      borderColor: "#EAEAEB",
    },
    "&:hover fieldset": {
      borderColor: "#EAEAEB",
      boxShadow: "0 0 6px rgba(0,0,0,0.15)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0,0,0,0.09)",
      borderWidth: "2px",
      boxShadow: "0 0 8px rgba(25,118,210,0.4)",
    },
  },
};

export const navbarIconsStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const drawerPaperStyle: SxProps<Theme> = {
  p: 2,
};

export const drawerCloseIconStyle: SxProps<Theme> = {
  alignSelf: "flex-end",
};

export const drawerListBoxStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
};

export const mobileTopActionsStyle: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  alignItems: "center",
  gap: 1,
};

export const itemContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  minWidth: 64,
  color: "#333",
  p: { md: 0, lg: 0.4 },
};

export const itemLabelStyle: SxProps<Theme> = {
  mt: 0.5,
  fontSize: "14px",
  color: "#757779",
};

export const searchInputStyle: SxProps<Theme> = {
  borderRadius: "20px",
  minWidth: 200,
  height: "2.5rem",
  backgroundColor: "#fff",
  transition: "all 0.3s ease",
  "& fieldset": {
    borderColor: "#light Grey 20%",
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
};

export const topBarBoxStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
};

export const largeScreenBoxStyle: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
};

export const middleBoxStyle: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
};

export const smallScreenBoxStyle: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const avatarNameBoxStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
};

export const avatarNameTextStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1,
};

export const navButtonStyle = (isActive: boolean) => ({
  color: isActive ? "#6B6E70" : "#011823",
  fontSize: "16px",
  textTransform: "none",
  px: 1,
  fontWeight: isActive ? "bold" : "normal",
  outline: "none !important",
});

export const drawerButtonStyle = {
  color: "#6B6E70",
  fontSize: "1rem",
  textTransform: "none",
};
export const MidGrey = {
  color: "#757779",
};
