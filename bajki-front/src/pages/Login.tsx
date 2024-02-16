import { FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { authActions } from "../features/auth/authActions";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { loginValidationSchema } from "../formValidationSchams/loginValidationSchema";
import { Navigate } from "react-router-dom";
import { navItems } from "../utils/navItems";
import Center from "../components/Center";
import { Status } from "../utils/stateStatus";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    status,
    error,
    data: { userProfile: userInfo },
  } = useAppSelector((state) => state.auth);
  const EMAIL = "email";
  const PASSWORD = "password";

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

  if (userInfo) {
    return <Navigate to={navItems.home.path} replace />;
  }

  return (
    <Center>
      <FormControl
        component={"form"}
        onSubmit={(val) => formik.handleSubmit(val)}
      >
        <h3>Log in</h3>
        <TextField
          id={EMAIL}
          name={EMAIL}
          label="Email *"
          type={EMAIL}
          sx={{ mb: 2 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        />
        <TextField
          id={PASSWORD}
          name={PASSWORD}
          label="Password *"
          type={PASSWORD}
          sx={{ mb: 2 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loading={status === Status.Loading}
        >
          Zaloguj
        </LoadingButton>
      </FormControl>
    </Center>
  );
};

export default Login;
