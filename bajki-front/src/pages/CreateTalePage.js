import { Box, Grid } from "@mui/material";
import CreateTaleForm from "../features/tales/createTale/CreateTaleForm";

const CreateTalePage = () => {
  return (
    <Box sx={{ pt: 10, px: 2, flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={1} md={5}>
          Karuzela pięknych zdjęć
        </Grid>
        <Grid item xs={1} md={7}>
            <CreateTaleForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateTalePage;
