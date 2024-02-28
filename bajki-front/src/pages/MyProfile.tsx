import { Box, Card, Grid, Typography } from "@mui/material";
import BackgroundImageBox from "../components/BackgroundImageBox";
import BackgroundOpacityBox from "../components/BackgroundOpacityBox";
import Center from "../components/Center";
import UnderlineTextButton from "../components/UnderlineTextButton";
import { useAppSelector } from "../hooks/reduxHooks";

const MyProfile = () => {
  const { userProfile } = useAppSelector((state) => state.auth.data);
  return (
    <Grid container position="relative">
      <BackgroundImageBox />
      <BackgroundOpacityBox />
      <Center>
        <Card
          sx={{
            background: "#F2EDE9",
            borderRadius: 6,
            p: 5,
          }}
        >
          <Typography variant="h2" color="secondary.main">
            Mój profil
          </Typography>
          <Box my={4}>
            <Typography sx={{ mb: 4 }} variant="body1" color="secondary.main">
              Email: {userProfile?.email}
            </Typography>
            <UnderlineTextButton text="Zmień hasło" onClick={() => {}} />
            <Box sx={{ mt: 2 }} />
            <UnderlineTextButton text="Usuń konto" onClick={() => {}} />
          </Box>
        </Card>
      </Center>
    </Grid>
  );
};

export default MyProfile;
