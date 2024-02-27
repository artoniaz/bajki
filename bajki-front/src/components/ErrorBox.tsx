import { Typography } from "@mui/material";

const ErrorBox = ({errorMessage}: {errorMessage: string}) => {
    return ( <Typography color='error.main' variant="body2">{errorMessage}</Typography> );
}
 
export default ErrorBox;