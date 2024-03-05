import { Box, Card, Typography } from "@mui/material";
import Center from "../components/Center";
import UnderlineTextButton from "../components/UnderlineTextButton";
import { useAppSelector } from "../hooks/reduxHooks";

const MyProfile = () => {
  const { userProfile } = useAppSelector((state) => state.auth.data);
  return (
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
  );
};

export default MyProfile;
