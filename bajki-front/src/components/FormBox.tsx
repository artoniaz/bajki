import { Box } from "@mui/material";
import { Status } from "../utils/stateStatus";
import ErrorBox from "./ErrorBox";

interface FormBoxProps {
  children: any;
  status: Status;
  error: string | null;
}

const FormBox = ({ children, status, error }: FormBoxProps) => {
  return (
    <Box
      bgcolor="rgba(0,0,0,0.4)"
      sx={{ borderRadius: 5 }}
      pt={2}
      pb={4}
      px={6}
      display="flex"
      flexDirection="column"
      alignItems="strech"
      width='100%'
    >
      {children}{" "}
      {status === Status.Failed && <ErrorBox errorMessage={error!} />}
    </Box>
  );
};

export default FormBox;
