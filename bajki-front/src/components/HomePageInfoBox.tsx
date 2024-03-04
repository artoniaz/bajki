import { Box, Typography } from "@mui/material";

const HomePageInfoBox = () => {
  return (
    <Box
      sx={{
        pt: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="h1"sx={{
        pb: { xs: 4, md: 6 },
      }}>
        Stwórz swoje bajki
      </Typography>
      <Typography variant="body1">
        Spraw aby Twoje dziecko zostało bohaterem Waszej bajki. Wybierz temat
        razem z dzieckiem. Pobudź jego kreatywność.
      </Typography>
    </Box>
  );
};

export default HomePageInfoBox;
