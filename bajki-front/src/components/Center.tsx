import { Box } from "@mui/material";

const Center = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <Box position="relative" width="100%">
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
