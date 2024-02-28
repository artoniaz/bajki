import { Typography } from "@mui/material";

interface UnderlineTextButtonProps {
  text: string;
  onClick: () => void;
}

const UnderlineTextButton = ({ text, onClick }: UnderlineTextButtonProps) => {
  return (
    <Typography
      onClick={() => onClick()}
      sx={{ cursor: "pointer", textDecoration: "underline" }}
      variant="body2"
      color="secondary.main"
    >
      {text}
    </Typography>
  );
};

export default UnderlineTextButton;
