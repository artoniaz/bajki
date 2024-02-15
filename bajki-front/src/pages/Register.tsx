import { FormControl, TextField, dividerClasses } from "@mui/material";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { authActions } from "../features/auth/authActions";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { registerValidationSchema } from "../formValidationSchams/registerValidationSchama";
import AuthCredentialsModel from "../models/AuthCredentialsModel";
import Center from "../components/Center";
import { Status } from "../utils/stateStatus";
import { Navigate } from "react-router-dom";
import { navItems } from "../utils/navItems";

const Register = () => {
  const dispatch = useAppDispatch();
  const {
    registerStatus,
    registerError,
    data: { userProfile: userInfo },
  } = useAppSelector((state) => state.auth);

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

  if (userInfo) {
    return <Navigate to={navItems.home.path} replace />;
  }

  return (
    <Center>
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
          loading={registerStatus === Status.Loading}
        >
          Stwórz konto
        </LoadingButton>
        {registerStatus === Status.Failed && <div>{registerError}</div>}
      </FormControl>
    </Center>
  );
};

export default Register;
