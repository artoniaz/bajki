import { Box, Card, Typography } from "@mui/material";
import Center from "../components/Center";
import UnderlineTextButton from "../components/UnderlineTextButton";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { authActions } from "../features/auth/authActions";
import { navItems } from "../utils/navItems";

const MyProfile = () => {
  const { userProfile } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(authActions.logout());
    navigate(navItems.createTale.path);
  };
  return (
    <Center>
      <Card
        sx={{
          background: "#F2EDE9",
          borderRadius: 6,
          p: { xs: 2, md: 5 },
        }}
      >
        <Typography variant="h2" color="secondary.main">
          Mój profil
        </Typography>
        <Box sx={{ my: { xs: 1, md: 4 } }}>
          <Typography sx={{ mb: 4 }} variant="body1" color="secondary.main">
            Email: {userProfile?.email}
          </Typography>
          <UnderlineTextButton text="Wyloguj" onClick={handleLogout} />
          <Box sx={{ mt: 2 }} />
          <UnderlineTextButton text="Zmień hasło" onClick={() => {}} />
          <Box sx={{ mt: 2 }} />
          <UnderlineTextButton text="Usuń konto" onClick={() => {}} />
        </Box>
      </Card>
    </Center>
  );
};

export default MyProfile;
