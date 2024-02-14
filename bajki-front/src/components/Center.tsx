import { Box } from "@mui/material";
import { ReactNode } from "react";

const Center = ({
  children,
  height,
}: {
  children: ReactNode;
  height?: string;
}) => {
  return (
    <Box position="relative" width="100%" height={height ?? "100vh"}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%,-50%)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Center;
