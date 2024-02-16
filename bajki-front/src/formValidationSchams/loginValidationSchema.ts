import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});
