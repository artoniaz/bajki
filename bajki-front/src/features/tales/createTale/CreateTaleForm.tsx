import TaleModel from "../../../models/TaleModel";
import {
  Box,
  FormControl,
  MenuItem,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createTaleValidationSchema } from "./createTaleValidationSchema";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Status } from "../../../utils/stateStatus";
import taleActions from "../talesActions";
import StyledTextField from "../../../components/StyledTextField";
import StyledLoadingButton from "../../../components/StyledLoadingButton";

const CreateTaleForm = () => {
  const dispatch = useAppDispatch();

  const { status } = useAppSelector((state) => state.createTale);
  const { userProfile } = useAppSelector((state) => state.auth.data);

  const formik = useFormik({
    initialValues: {
      user_id: userProfile?.id ?? "",
      child_name: "",
      age: 0,
      topic: "",
    },
    validationSchema: createTaleValidationSchema,
    onSubmit: (values: TaleModel) => {
      dispatch(taleActions.createTale(values));
    },
  });

  useEffect(() => {
    if (status === Status.Success) {
      formik.resetForm();
    }
  }, [status]);

  return (
    <Box
      bgcolor="rgba(0,0,0,0.4)"
      sx={{ borderRadius: 5 }}
      pt={2}
      pb={4}
      px={6}
      display='flex'
      flexDirection='column'
      alignItems='strech'
      maxWidth='450px'
    >
      <Typography variant="h2" alignSelf='center'>
        Stwórz bajkę
      </Typography>
      <FormControl
        component={"form"}
        sx={{ py: 4 }}
        onSubmit={(val) => formik.handleSubmit(val)}
      >
        <StyledTextField
          id="child_name"
          name="child_name"
          label="Imię *"
          type="text"
          sx={{ mb: 2 }}
          value={formik.values.child_name}
          onChange={formik.handleChange}
          error={formik.touched.child_name && Boolean(formik.errors.child_name)}
        />
        <StyledTextField
          id="age"
          name="age"
          label="Wiek *"
          type="number"
          sx={{ mb: 2 }}
          value={formik.values.age || ""}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
        />
        <StyledTextField
          select
          id="topic"
          name="topic"
          label="Temat"
          value={formik.values.topic}
          onChange={formik.handleChange}
          error={formik.touched.topic && Boolean(formik.errors.topic)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="dinosaurs">Dinozaury</MenuItem>
          <MenuItem value="space">Kosmos</MenuItem>
          <MenuItem value="pokemon">Pokemon</MenuItem>
          <MenuItem value="cats">Koty</MenuItem>
        </StyledTextField>
        <StyledLoadingButton
          type="submit"
          variant="contained"
          loading={status === Status.Loading}
        >
          Stwórz bajkę
        </StyledLoadingButton>
      </FormControl>
    </Box>
  );
};

export default CreateTaleForm;
