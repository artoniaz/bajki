import { Box } from "@mui/material";

const MainContainer = ({ children }: any) => {
  return (
    <Box position="absolute" p={10}>
      {children}
    </Box>
  );
};

export default MainContainer;
