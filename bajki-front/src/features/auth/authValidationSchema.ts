import * as yup from "yup";

export const authValidationSchema = yup.object().shape({
  //TODO: add more effective validation
  email: yup.string().required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});
