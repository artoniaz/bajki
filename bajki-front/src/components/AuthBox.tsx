import { useAppSelector } from "../hooks/reduxHooks";
import NavLinkButton from "./NavLinkButton";
import { useLocation } from "react-router-dom";

interface AuthBoxProps {
  onDrawerClose?: (arg: boolean) => void;
}

const AuthBox = ({ onDrawerClose }: AuthBoxProps) => {
  const { userProfile } = useAppSelector((state) => state.auth.data);

  const { pathname } = useLocation();

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
    </>
  ) : (
    <NavLinkButton
      to="/login"
      text="Zaloguj"
      isActive={pathname === "/login"}
      onDrawerClose={onDrawerClose}
    />
  );
};

export default AuthBox;
