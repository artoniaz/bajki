import { Box, Stack } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import TaleModel from "../models/TaleModel";
import TaleCard from "./TaleCard";

const TalesContainer = () => {
  const { data: tales } = useAppSelector((state) => state.getTales);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {tales.map((tale: TaleModel) => (
        <Box key={tale._id}>
          <TaleCard tale={tale} />
        </Box>
      ))}
    </Stack>
  );
};

export default TalesContainer;
