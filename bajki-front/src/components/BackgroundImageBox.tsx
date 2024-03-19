import { Box } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import { Status } from "../utils/stateStatus";

const BackgroundImageBox = () => {
  const { status } = useAppSelector((state) => state.createTale);
  return (
    <Box
      component="img"
      sx={{
        position: status !== Status.Success ? "fixed" : "absolute",
        width: "100%",
        maxWidth: "3400px",
        height: "100vh",
        margin: "auto",
        objectFit: "cover",
      }}
      alt="Children reading, having fun."
      src={require("../images/coverImg.png")}
    />
  );
};

export default BackgroundImageBox;
