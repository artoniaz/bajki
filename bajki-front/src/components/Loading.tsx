import { useTheme } from "@mui/material";
import ReactLoading from "react-loading";

const Loading = (width : {width?: number}) => {
  const theme = useTheme();

  return (
    <ReactLoading
      type="bubbles"
      color={theme.palette.primary.main}
      width={width ?? 100}
    />
  );
};

export default Loading;
