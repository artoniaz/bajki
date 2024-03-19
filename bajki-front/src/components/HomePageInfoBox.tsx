import { Box, Typography } from "@mui/material";
import TextBox from "./TextBox";

const HomePageInfoBox = () => {
  return (
    <Box
      sx={{
        pt: { xs: 4, md: 6 },
      }}
    >
      <TextBox>
        <>
          <Typography
            variant="h1"
            sx={{
              pb: { xs: 2, md: 3 },
            }}
          >
            Stwórz swoje bajki
          </Typography>
          <Typography variant="body1">
            Spraw aby Twoje dziecko zostało bohaterem Waszej bajki. Wybierz
            temat razem z dzieckiem. Pobudź jego kreatywność.
          </Typography>
        </>
      </TextBox>
    </Box>
  );
};

export default HomePageInfoBox;
