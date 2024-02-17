import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import TaleModel from "../models/TaleModel";
import constants from "../utils/constants";

const TaleCard = ({ tale }: { tale: TaleModel }) => {
  return (
    <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}>
      <Box
        component="img"
        width="100%"
        height="180px"
        src={constants.backupTaleImg}
        alt="Tale image"
        sx={{ backgroundSize: "cover", objectFit: "cover" }}
      />
      <CardContent sx={{ backgroundColor: "" }}>
        <Typography variant="body2" fontWeight={700}>
          {tale.content}
        </Typography>
        <Typography variant="body2">
          Dla: {tale.child_name}, {tale.age.toString()}
        </Typography>
        <Typography variant="body2">Wiek: {tale.age.toString()} lat</Typography>
        <Box py={1}></Box>
        {/* TODO: download tale to the device */}
        <Button variant="contained">POBIERZ</Button>
      </CardContent>
    </Card>
  );
};

export default TaleCard;
