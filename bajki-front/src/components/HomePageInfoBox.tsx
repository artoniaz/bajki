import { Box, Typography } from "@mui/material";

const HomePageInfoBox = () => {
  return (
    <Box pt={6}>
      <Typography variant="h1" pb={6}>
        Personlizowane bajki
      </Typography>
      <Typography variant="body1">
        Spraw aby Twoje dziecko zostało bohaterem Waszej bajki.
      </Typography>
      <Typography variant="body1">
        Wybierz temat razem z dzieckiem. Pobudź jego kreatywność.
      </Typography>
    </Box>
  );
};

export default HomePageInfoBox;
