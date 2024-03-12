import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";

export interface RouterTextButtonProps {
  to: string;
  text: string;
  prefixText?: string;
}

const RouterTextButton = ({ to, text, prefixText }: RouterTextButtonProps) => {
  return (
    <RouterLink to={`/${to}`}>
      {prefixText && (
        <Typography component="span" variant="body2">
          {prefixText}
        </Typography>
      )}
      <Typography
        sx={{ textDecoration: "underline" }}
        component="span"
        variant="body2"
      >
        {text}
      </Typography>
    </RouterLink>
  );
};

export default RouterTextButton;
