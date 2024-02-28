import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import TaleModel from "../models/TaleModel";
import constants from "../utils/constants";

const TaleCard = ({ tale }: { tale: TaleModel }) => {
  return (
    <Card
      sx={{ width: { xs: "100%", sm: "358px", md: "326px" }, borderRadius: 4 }}
    >
      <Box
        component="img"
        width="100%"
        height="210px"
        src={constants.backupTaleImg}
        alt="Tale image"
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ px: 2, py: 0 }}>
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
