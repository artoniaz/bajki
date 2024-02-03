import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
