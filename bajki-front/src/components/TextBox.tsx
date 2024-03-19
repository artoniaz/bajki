import { Box } from "@mui/material";

const TextBox = ({ children }: { children: JSX.Element }) => {
  return (
    <Box
      component="section"
      style={{ zIndex: 2 }}
      bgcolor="rgba(0,0,0,0.4)"
      sx={{
        px: { xs: 2, md: 3 },
        py: 3,
        borderRadius: 5,
      }}
    >
      {children}
    </Box>
  );
};

export default TextBox;
