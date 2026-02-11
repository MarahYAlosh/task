import { createTheme } from "@mui/material";

export const theme = createTheme({
    direction: "rtl",
  typography: {
    fontFamily: `"IBM Plex Sans Arabic", sans-serif`,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `"IBM Plex Sans Arabic", sans-serif`,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
