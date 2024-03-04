import { useLocation } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import { navItems } from "../utils/navItems";
import NavLinkButton from "./NavLinkButton";
import AuthBox from "./AuthBox";

const NavLinkButtonList = ({
  onDrawerClose,
}: {
  onDrawerClose?: (arg: boolean) => void;
}) => {
  const { pathname } = useLocation();

  return (
    <>
      {[
        ...Object.values(navItems).map((navItem) => (
          <NavLinkButton
            key={navItem.path}
            to={navItem.pathMobile && isMobile ? navItem.pathMobile : navItem.path}
            text={navItem.content}
            isActive={pathname === navItem.path || pathname === navItem.pathMobile}
            onDrawerClose={onDrawerClose}
          />
        )),
        <AuthBox key="authBox" onDrawerClose={onDrawerClose} />,
      ]}
    </>
  );
};

export default NavLinkButtonList;
