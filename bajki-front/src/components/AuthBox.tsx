import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import NavLinkButton from "./NavLinkButton";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../features/auth/authActions";
import { navItems } from "../utils/navItems";

interface AuthBoxProps {
  onDrawerClose?: (arg: boolean) => void;
}

const AuthBox = ({ onDrawerClose }: AuthBoxProps) => {
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
        onDrawerClose={onDrawerClose}
      />
      <NavLinkButton
        to="/myProfile"
        text="Mój profil"
        isActive={pathname === "/myProfile"}
        onDrawerClose={onDrawerClose}
      />
      {/* TODO: move to my profile */}
      {/* <Button
        sx={{ color: "white", ml: 8 }}
        onClick={handleLogout}
      >
        Wyloguj
      </Button> */}
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
