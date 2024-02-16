import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Minimum 3 znaki")
    .max(50, "Zbyt wiele znaków")
    .required("Imię jest wymagane"),
  email: yup.string().email().required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});
