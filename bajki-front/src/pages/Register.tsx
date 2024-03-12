import { FormControl, Typography } from "@mui/material";
import { useFormik } from "formik";
import { authActions } from "../features/auth/authActions";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { registerValidationSchema } from "../formValidationSchams/registerValidationSchama";
import AuthCredentialsModel from "../models/AuthCredentialsModel";
import { Navigate } from "react-router-dom";
import { navItems } from "../utils/navItems";
import FormBox from "../components/FormBox";
import StyledTextField from "../components/StyledTextField";
import { Status } from "../utils/stateStatus";
import RouterTextButton from "../components/RouterTextBtn";
import StyledLoadingButton from "../components/StyledLoadingButton";

const Register = () => {
  const dispatch = useAppDispatch();
  const {
    status,
    error,
    data: { userProfile: userInfo },
  } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
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
    return <Navigate to={navItems.createTale.path} replace />;
  }

  return (
    <>
      <FormBox status={status} error={error}>
        <FormControl
          component={"form"}
          onSubmit={(val) => formik.handleSubmit(val)}
          sx={{ py: 4 }}
        >
          <Typography variant="h2" textAlign="center">
            Załóż konto
          </Typography>
          <StyledTextField
            id="name"
            name="name"
            label="Twoje imię *"
            size="small"
            type="name"
            sx={{ my: 2 }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <StyledTextField
            id="email"
            name="email"
            label="Email *"
            type="email"
            size="small"
            sx={{ mb: 2 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledTextField
            id="password"
            name="password"
            label="Hasło *"
            type="password"
            size="small"
            sx={{ mb: 2 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <StyledTextField
            id="passwordConfirm"
            name="passwordConfirm"
            label="Powtórz hasło *"
            type="password"
            size="small"
            sx={{ mb: 2 }}
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            helperText={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
            }
          />
          <StyledLoadingButton
            type="submit"
            variant="contained"
            loading={status === Status.Loading}
            size="large"
          >
            Stwórz konto
          </StyledLoadingButton>
        </FormControl>
        <RouterTextButton to="login" text="Masz już konto? Zaloguj się" />
      </FormBox>
    </>
  );
};

export default Register;
