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
      display="flex"
      flexDirection="column"
      alignItems="strech"
      width="100%"
      sx={{
        px: { xs: 2, md: 3 },
        py: 3,
        borderRadius: 5,
      }}
    >
      {children}{" "}
      {status === Status.Failed && (
        <Box mt={2}>
          <ErrorBox errorMessage={error!} />
        </Box>
      )}
    </Box>
  );
};

export default FormBox;
