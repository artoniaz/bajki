import { Drawer } from "@mui/material";
import NavLinkButtonList from "./NavLinkButtonList";

interface CustomDrawerProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

const CustomDrawer = ({ open, onClose }: CustomDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => onClose(false)}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "red",
          py: 8,
          px: 2,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <NavLinkButtonList onDrawerClose={onClose} />
    </Drawer>
  );
};

export default CustomDrawer;
