import { Box, Typography } from "@mui/material";
import Loading from "./Loading";

const FullScreenLoading = ({ text }: { text?: string }) => {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      bgcolor="rgba(0,0,0,0.4)"
      width="200px"
      borderRadius={4}
      sx={{
        transform: "translate(-50%,-50%)",
      }}
    >
      <Loading size={200} />
      {text && (
        <Typography variant="body2" textAlign="center" p={2}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default FullScreenLoading;
