import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import taleActions from "../talesActions";
import { Typography } from "@mui/material";
import TalesContainer from "../../../components/TalesContainer";

const TalesFeed = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(taleActions.getTalesByUser());
  }, []);

  return (
    <>
      <Typography mt={2} mb={3} color="secondary.main" variant="h2">
        Moje bajki
      </Typography>
      <TalesContainer />
    </>
  );
};

export default TalesFeed;
