import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import TaleModel from "../models/TaleModel";
import constants from "../utils/constants";

const TaleCard = ({ tale }: { tale: TaleModel }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "326px" },
        height: { xs: "120px", md: "auto" },
        borderRadius: 4,
        display: { xs: "flex", md: "initial" },
      }}
    >
      <Box
        component="img"
        src={constants.backupTaleImg}
        alt="Tale image"
        sx={{
          objectFit: "cover",
          height: { xs: "auto", md: "210px" },
          width: { xs: "40%", md: "100%" },
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          px: 2,
          py: { xs: 1, md: 0 },
          width: { xs: "60%", md: "auto" },
        }}
      >
        <Typography variant="h6" color="secondary.main">
          {tale.topic}
        </Typography>
        <Typography variant="body2" color="secondary.main" pb={2}>
          Dla: {tale.child_name}, {tale.age.toString()} lat
        </Typography>
        {/* TODO: download tale to the device */}
        <Button variant="contained">POBIERZ</Button>
      </CardContent>
    </Card>
  );
};

export default TaleCard;
