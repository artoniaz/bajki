import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkButton = ({
  text,
  to,
  color = "common.white",
}: {
  text: String;
  to: String,
  color?: String;
}) => {
  return (
    <Button component={NavLink} to={to.toString()} variant="text" sx={{ color: color.toString() }}>
      {text}
    </Button>
  );
};

export default NavLinkButton;
