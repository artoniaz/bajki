import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface NavLinkButtonProps {
  text: String;
  to: String;
  color?: String;
  isActive: boolean;
}

const NavLinkButton = ({
  text,
  to,
  color = "common.white",
  isActive,
}: NavLinkButtonProps) => {
  return (
    <Button
      className={isActive ? "navLinkBtnActive" : ""}
      component={NavLink}
      to={to.toString()}
      variant="text"
      sx={{ color: color.toString(), ml: 2 }}
    >
      {text}
    </Button>
  );
};

export default NavLinkButton;
