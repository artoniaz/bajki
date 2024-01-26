import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Box component="main">
        <Outlet />
      </Box>
    </div>
  );
};

export default RootLayout;
