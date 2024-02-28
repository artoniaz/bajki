import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import NavLinkButton from "./NavLinkButton";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../features/auth/authActions";
import { navItems } from "../utils/navItems";

const AuthBox = () => {
  const { userProfile } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = async () => {
    await dispatch(authActions.logout());
    navigate(navItems.createTale.path);
  };

  return userProfile ? (
    <>
      <NavLinkButton
        to="/myTales"
        text="Moje bajki"
        isActive={pathname === "/myTales"}
      />
      <Button sx={{ color: "white", ml: 8 }} onClick={handleLogout}>
        Wyloguj
      </Button>
    </>
  ) : (
    <NavLinkButton
      to="/login"
      text="Zaloguj"
      isActive={pathname === "/login"}
    />
  );
};

export default AuthBox;
