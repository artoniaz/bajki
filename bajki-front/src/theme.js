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
      white: "#FFFFFF", //white
    },
    background: {
      default: "#FAFCFE", //grey
    },
    text: {
      primary: "#1D2731", //ivory black
      secondary: "#1D2731", //white
    },
  },
});
