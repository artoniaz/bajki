import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";

export interface RouterTextButtonProps {
  to: string;
  text: string;
}

const RouterTextButton = ({ to, text }: RouterTextButtonProps) => {
  return (
    <RouterLink to={`/${to}`}>
      <Typography
        sx={{ cursor: "pointer", textDecoration: 'underline' }}
        variant="body2"
      >
        {text}
      </Typography>
    </RouterLink>
  );
};

export default RouterTextButton;
