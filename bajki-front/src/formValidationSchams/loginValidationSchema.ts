import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  //TODO: add more effective validation
  email: yup.string().required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});
