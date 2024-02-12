import * as yup from "yup";

export const createTaleValidationSchema = yup.object().shape({
  child_name: yup.string().required("Imię jest wymagane"),
  age: yup
    .number()
    .required("Wiek jest wymagany")
    .positive("Wiek nie może być ujemny")
    .integer(),
  topic: yup.string().required("Temat jest wymagany"),
});
