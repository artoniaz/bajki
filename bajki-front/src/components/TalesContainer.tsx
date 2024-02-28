import { Box, Stack } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import TaleModel from "../models/TaleModel";
import TaleCard from "./TaleCard";

const TalesContainer = () => {
  const { data: tales } = useAppSelector((state) => state.getTales);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent='space-evenly' alignItems='stretch' gap={2}>
      {tales.map((tale: TaleModel) => (
          <TaleCard key={tale._id} tale={tale} />
      ))}
    </Stack>
  );
};

export default TalesContainer;
