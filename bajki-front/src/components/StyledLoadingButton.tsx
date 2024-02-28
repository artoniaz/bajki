import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  "& .MuiLoadingButton-loadingIndicator": {
    color: theme.palette.primary.main,
  },
}));

export default StyledLoadingButton;
