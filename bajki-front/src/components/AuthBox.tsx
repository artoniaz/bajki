import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import NavLinkButton from "./NavLinkButton";
import { logoutUser } from "../features/auth/authSlice";

const AuthBox = () => {
  const { userInfo } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  return (
    <Box>
      {!userInfo ? (
        <>
          <NavLinkButton to="/login" text="Zaloguj" />
          <NavLinkButton to="/register" text="Stwórz konto" />
        </>
      ) : (
        <>
          {userInfo.name}
          <Button
            sx={{ color: "white" }}
            onClick={() => dispatch(logoutUser())}
          >
            Wyloguj
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthBox;
