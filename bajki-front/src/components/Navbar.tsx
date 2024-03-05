import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoBox from "./LogoBox";
import { useState } from "react";
import CustomDrawer from "./CustomDrawer";
import NavLinkButtonList from "./NavLinkButtonList";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSetIsDrawerOpen = (arg: boolean) => setIsDrawerOpen(arg);

  return (
    <AppBar sx={{ backgroundColor: "rgba(0,0,0,0.4)", px: { xs: 0, md: 6 } }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <LogoBox logoType="noTitle" size="small" />
        <CustomDrawer open={isDrawerOpen} onClose={handleSetIsDrawerOpen} />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          sx={{ display: { md: "none" }, p: 0 }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <NavLinkButtonList />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
