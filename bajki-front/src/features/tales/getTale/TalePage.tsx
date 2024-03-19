import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import constants from "../../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useEffect } from "react";
import taleActions from "../talesActions";
import { useNavigate, useParams } from "react-router-dom";
import { Status } from "../../../utils/stateStatus";
import Loading from "../../../components/Loading";
import Center from "../../../components/Center";
import ErrorBox from "../../../components/ErrorBox";

const TalePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const { data: tale } = useAppSelector((state) => state.getTale);
  const { status } = useAppSelector((state) => state.getTale);
  const { error } = useAppSelector((state) => state.getTale);

  useEffect(() => {
    if (id) {
      dispatch(taleActions.getTale(id));
    }
  }, []);

  if (status === Status.Loading) {
    return (
      <Center>
        <Loading />
      </Center>
    );
  }

  if (status === Status.Failed) {
    return (
      <Center>
        <>
          <ErrorBox errorMessage={error!}>
            <Button size='small' onClick={() => navigate(-1)}>Powrót</Button>
          </ErrorBox>
        </>
      </Center>
    );
  }

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "100%" },
        borderRadius: 4,
        display: { md: "flex" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        component="img"
        src={tale?.image_url ?? constants.backupTaleImg}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = constants.backupTaleImg;
        }}
        alt="Tale image"
        sx={{
          maxHeight: { xs: "220px", md: "560px" },
          objectFit: "cover",
          width: { xs: "100%", md: "50%" },
          borderRadius: 4,
        }}
      />
      <Box p={2}>
        <Typography variant="h2" color={theme.palette.primary.main}>
          {tale?.topic}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.common.black}
          textAlign="justify"
        >
          {tale?.content}
        </Typography>
      </Box>
    </Card>
  );
};

export default TalePage;
