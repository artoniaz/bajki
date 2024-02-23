import { Box } from "@mui/material";

const FormBox = ({ children }: any) => {
  return (
    <Box
      bgcolor="rgba(0,0,0,0.4)"
      sx={{ borderRadius: 5 }}
      pt={2}
      pb={4}
      px={6}
      display="flex"
      flexDirection="column"
      alignItems="strech"
      maxWidth="450px"
    >
      {children}{" "}
    </Box>
  );
};

export default FormBox;
