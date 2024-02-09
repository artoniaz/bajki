import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7BD3EA", //blue
    },
    secondary: {
      main: "#F6D6D6", //pink
    },
    success: {
      main: "#A1EEBD", //green
    },
    info: {
      main: "#7BD3EA", //blue
    },
    warning: {
      main: "#F6F7C4", //yellow
    },
    common: {
      black: "#1D2731", //ivory black
    },
    background: {
      default: "#FAFCFE", //grey
    },
    text: {
      secondary: "#1D2731", //ivory black
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
