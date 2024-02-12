import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinkButton from "./NavLinkButton";
import { navItems } from "../utils/navItems";
import { useAppDispatch } from "../hooks/reduxHooks";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          // onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          color="common.white"
          sx={{ mr: 8, display: { xs: "none", sm: "block" } }}
        >
          BAJKI
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          {Object.values(navItems).map((navItem) => (
            <NavLinkButton
              key={navItem.path}
              to={navItem.path}
              text={navItem.content}
            />
          ))}
        </Box>
        <NavLinkButton to="/login" text="Zaloguj" />
        <NavLinkButton to="/register" text="Stwórz konto" />
        <Button sx={{ color: "white" }} onClick={() => dispatch(logoutUser())}>
          Wyloguj
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
