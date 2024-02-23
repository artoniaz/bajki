import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import NavLinkButton from "./NavLinkButton";
import { useNavigate } from "react-router-dom";
import { authActions } from "../features/auth/authActions";
import { navItems } from "../utils/navItems";

const AuthBox = () => {
  const { userProfile } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(authActions.logout());
    navigate(navItems.home.path);
  };
  return (
    <Box>
      {!userProfile ? (
        <>
          <NavLinkButton to="/login" text="Zaloguj" isActive={true}/>
          <NavLinkButton to="/register" text="Stwórz konto" isActive={true}/>
        </>
      ) : (
        <>
          <NavLinkButton to="/myTales" text="Moje bajki" isActive={true}/>
          {userProfile.name}
          <Button sx={{ color: "white" }} onClick={() => handleLogout()}>
            Wyloguj
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthBox;
