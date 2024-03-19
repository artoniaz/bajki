import { useTheme } from "@mui/material";
import ReactLoading from "react-loading";

const Loading = ({size} : {size?: number}) => {
  const theme = useTheme();

  return (
    <ReactLoading
      type="bubbles"
      color={theme.palette.primary.main}
      width={size ?? 100}
      height={size}
    />
  );
};

export default Loading;
