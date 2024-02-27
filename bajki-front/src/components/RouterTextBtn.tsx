import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export interface RouterTextButtonProps {
  to: string;
  text: string;
}

const RouterTextButton = ({ to, text }: RouterTextButtonProps) => {
  return (
    <RouterLink to={`/${to}`}>
      <Link
        style={{ cursor: "pointer" }}
        variant="body2"
        underline="always"
        color="#fff"
      >
        {text}
      </Link>
    </RouterLink>
  );
};

export default RouterTextButton;
