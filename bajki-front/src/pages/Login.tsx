import { Box, FormControl, Typography } from "@mui/material";
import { useFormik } from "formik";
import { authActions } from "../features/auth/authActions";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { loginValidationSchema } from "../formValidationSchams/loginValidationSchema";
import { Navigate } from "react-router-dom";
import { navItems } from "../utils/navItems";
import { Status } from "../utils/stateStatus";
import FormBox from "../components/FormBox";
import StyledTextField from "../components/StyledTextField";
import StyledLoadingButton from "../components/StyledLoadingButton";
import RouterTextButton from "../components/RouterTextBtn";

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
    return <Navigate to={navItems.createTale.path} replace />;
  }

  return (
    <>
      <FormBox status={status} error={error}>
        <Typography variant="h2" alignSelf="center">
          Zaloguj
        </Typography>
        <FormControl
          component={"form"}
          onSubmit={(val) => formik.handleSubmit(val)}
          sx={{ py: 4 }}
        >
          <StyledTextField
            id={EMAIL}
            name={EMAIL}
            label="Email *"
            type={EMAIL}
            size="small"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledTextField
            id={PASSWORD}
            name={PASSWORD}
            label="Password *"
            type={PASSWORD}
            size="small"
            sx={{ my: 2 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <StyledLoadingButton
            type="submit"
            variant="contained"
            loading={status === Status.Loading}
          >
            Zaloguj
          </StyledLoadingButton>
        </FormControl>
      </FormBox>
      <RouterTextButton to="" text="Zapomniałem hasła" />
      <Box my={0.5} />
      <RouterTextButton to="register" text="Nie masz konta? Załóż konto" />
    </>
  );
};

export default Login;
