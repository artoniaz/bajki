import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  //TODO: add more effective validation
  name: yup.string().required("Imię jest wymagane"),
  email: yup.string().required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});
