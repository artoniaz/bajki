import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface NavLinkButtonProps {
  text: string;
  to: string;
  toMobile?: string;
  color?: string;
  isActive: boolean;
  onDrawerClose?: (arg: boolean) => void;
}

const NavLinkButton = ({
  text,
  to,
  toMobile,
  color = "common.white",
  isActive,
  onDrawerClose,
}: NavLinkButtonProps) => {
  return (
    <Button
      className={isActive ? "navLinkBtnActive" : ""}
      component={NavLink}
      to={toMobile ? toMobile : to}
      variant="text"
      sx={{ color: color.toString(), ml: 2 }}
      onClick={onDrawerClose ? () => onDrawerClose(false) : () => {}}
    >
      {text}
    </Button>
  );
};

export default NavLinkButton;
