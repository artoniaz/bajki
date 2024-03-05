import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008C51", //green
    },
    secondary: {
      main: "#005934", //dark green
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "48px",
      color: "#FFFFFF",
      fontWeight: 700,
      "@media (max-width:900px)": {
        fontSize: "22px",
      },
    },
    h2: {
      fontFamily: ["Galada", "sans-serif"].join(","),
      color: "#FFFFFF",
      fontSize: "62px",
      "@media (max-width:900px)": {
        fontSize: "28px",
      },
    },
    h6: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "24px",
      color: "#FFFFFF",
      fontWeight: 500,
      "@media (max-width:900px)": {
        fontSize: "14px",
      },
    },
    body1: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      color: "#FFFFFF",
      fontSize: "24px",
      "@media (max-width:900px)": {
        fontSize: "14px",
      },
    },
    body2: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      color: "#FFFFFF",
      fontSize: "18px",
      "@media (max-width:900px)": {
        fontSize: "8px",
      },
    },
  },
});
