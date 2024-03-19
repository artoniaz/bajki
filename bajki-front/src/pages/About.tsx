import { Typography } from "@mui/material";
import TextBox from "../components/TextBox";

const About = () => {
  return (
    <TextBox>
      <>
        <Typography variant="h2">O nas</Typography>
        <Typography variant="body1">
          Specjalizujemy się w tworzeniu spersonalizowanych opowieści dla
          dzieci, które stają się niezapomnianymi przygodami. Nasza pasja do
          pisania i kreatywności sprawia, że każda historia jest wyjątkowa i
          dopasowana do indywidualnych potrzeb każdego dziecka.
        </Typography>
      </>
    </TextBox>
  );
};

export default About;
