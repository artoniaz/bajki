import { FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { authActions } from "../features/auth/authActions";
import { Status } from "../models/InitialState";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { loginValidationSchema } from "../formValidationSchams/loginValidationSchema";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { navItems } from "../utils/navItems";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status, error } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: { email: string; password: string }) => {
      dispatch(
        authActions.loginUser({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  useEffect(() => {
    if(status ===Status.Success) {
      navigate(navItems.home.path)
    }
  },[status])

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
