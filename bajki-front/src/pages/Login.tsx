import { FormControl, TextField, dividerClasses } from "@mui/material";
import { useFormik } from "formik";
import { authValidationSchema } from "../features/auth/authValidationSchema";
import { LoadingButton } from "@mui/lab";
import { authActions } from "../features/auth/authActions";
import { Status } from "../models/InitialState";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const {  status, error } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authValidationSchema,
    onSubmit: (values: { email: string; password: string }) => {
      dispatch(
        authActions.loginUser({
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
      <h3>Log in</h3>
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
        Zaloguj
      </LoadingButton>
      {status === Status.Failed && <div>{error}</div>}
    </FormControl>
  );
};

export default Login;
