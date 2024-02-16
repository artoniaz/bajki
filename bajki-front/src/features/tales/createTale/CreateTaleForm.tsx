import TaleModel from "../../../models/TaleModel";
import { TaleThunk } from "./taleThunk";
import { FormControl, MenuItem, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createTaleValidationSchema } from "./createTaleValidationSchema";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Status } from "../../../utils/stateStatus";

const CreateTaleForm = () => {
  const dispatch = useAppDispatch();

  const {data: {content}, status} = useAppSelector(
    (state) => state.createTale
  );

  const formik = useFormik({
    initialValues: {
      child_name: "",
      age: 0,
      topic: "",
    },
    validationSchema: createTaleValidationSchema,
    onSubmit: (values: TaleModel) => {
      dispatch(TaleThunk.createTale(values));
    },
  });

  useEffect(() => {
    if (status === Status.Success) {
      formik.resetForm();
    }
  }, [status]);

  return (
    <>
      <Typography sx={{ typography: { sm: "h5", md: "h3" } }} color="primary">
        Wygeneruj bajkę
      </Typography>
      <FormControl
        component={"form"}
        sx={{ py: 4 }}
        onSubmit={(val) => formik.handleSubmit(val)}
      >
        <TextField
          id="child_name"
          name="child_name"
          label="Imię *"
          type="text"
          sx={{ mb: 2 }}
          value={formik.values.child_name}
          onChange={formik.handleChange}
          error={formik.touched.child_name && Boolean(formik.errors.child_name)}
        />
        <TextField
          id="age"
          name="age"
          label="Wiek *"
          type="number"
          sx={{ mb: 2 }}
          value={formik.values.age || ""}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
        />
        <TextField
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
        </TextField>
        <LoadingButton
          type="submit"
          variant="contained"
          loading={status === Status.Loading}
        >
          Stwórz bajkę
        </LoadingButton>
      </FormControl>
      {status === Status.Success && content}
    </>
  );
};

export default CreateTaleForm;
