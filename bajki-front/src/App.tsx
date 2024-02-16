import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import CustomSnackbarProvider from "./components/CustomSnackbarProvider";

function App() {
  return (
    <CustomSnackbarProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </CustomSnackbarProvider>
  );
}

export default App;
