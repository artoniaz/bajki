import { FormControl, TextField, dividerClasses } from "@mui/material";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { authActions } from "../features/auth/authActions";
import { Status } from "../models/InitialState";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { registerValidationSchema } from "../formValidationSchams/registerValidationSchama";
import AuthCredentialsModel from "../models/AuthCredentialsModel";

const Register = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values: AuthCredentialsModel) => {
      dispatch(
        authActions.registerUser({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <FormControl
      component={"form"}
      onSubmit={(val) => formik.handleSubmit(val)}
    >
      <h3>Sign up</h3>
      <TextField
        id="name"
        name="name"
        label="Name *"
        type="name"
        sx={{ mb: 2 }}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />
      <TextField
        id="email"
        name="email"
        label="Email *"
        type="email"
        sx={{ mb: 2 }}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextField
        id="password"
        name="password"
        label="Password *"
        type="password"
        sx={{ mb: 2 }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        loading={status === Status.Loading}
      >
        Stwórz konto
      </LoadingButton>
      {status === Status.Failed && <div>{error}</div>}
    </FormControl>
  );
};

export default Register;
