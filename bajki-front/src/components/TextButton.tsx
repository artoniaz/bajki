import { Button } from "@mui/material";

const TextButton = ({
  text,
  handleClick,
  color = 'common.white',
}: {
  text: String;
  handleClick: Function;
  color?: String,
}) => {
  return (
    <Button variant="text" onClick={() => handleClick()} sx={{ color: color.toString() }}>
      {text}
    </Button>

  );
};

export default TextButton;
