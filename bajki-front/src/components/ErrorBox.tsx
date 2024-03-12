import { Box, Typography, useTheme } from "@mui/material";

const ErrorBox = ({ errorMessage }: { errorMessage: string }) => {
    const theme = useTheme();
    const errorColor = theme.palette.error.main;
    console.log(errorColor);
    
  return (
    <Box
    border='2px solid'
    borderColor={errorColor}
    bgcolor='#fff'
    py={1.2}
    px={2}
    >
      <Typography color={errorColor} variant="body2">
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default ErrorBox;
