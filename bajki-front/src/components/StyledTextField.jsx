import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  "& label": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    // borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    backgroundColor: "rgba(255,255,255, 0.3)",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255, 0.2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
});

export default StyledTextField;
