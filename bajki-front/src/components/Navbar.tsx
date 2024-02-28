import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinkButton from "./NavLinkButton";
import { navItems } from "../utils/navItems";
import LogoBox from "./LogoBox";
import { useLocation } from "react-router-dom";
import AuthBox from "./AuthBox";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <AppBar sx={{ backgroundColor: "rgba(0,0,0,0.4)", px: 8 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          // onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <LogoBox logoType="noTitle" width={"100px"} height={"67px"} />
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          {[
            ...Object.values(navItems).map((navItem) => (
              <NavLinkButton
                key={navItem.path}
                to={navItem.path}
                text={navItem.content}
                isActive={pathname === navItem.path}
              />
            )),
            <AuthBox key='authBox' />,
          ]}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
