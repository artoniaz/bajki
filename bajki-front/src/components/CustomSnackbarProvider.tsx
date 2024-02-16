import { SnackbarProvider, closeSnackbar } from "notistack";
import { ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const action = (snackbarId: any) => (
  <IconButton
    aria-label="close"
    color="inherit"
    sx={{ p: 0.5 }}
    onClick={() => closeSnackbar(snackbarId)}
  >
    <CloseIcon />
  </IconButton>
);

const CustomSnackbarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SnackbarProvider
      autoHideDuration={3000}
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
