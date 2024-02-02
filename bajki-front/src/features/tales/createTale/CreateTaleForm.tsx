import { useState } from "react";
import TaleModel from "../../../models/TaleModel";
import { useDispatch, useSelector } from "react-redux";
import { TaleThunk } from "./taleThunk";
import { AppDispatch, RootState } from "../../store";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  child_name: yup.string().required("Imię jest wymagane"),
  age: yup
    .number()
    .required("Wiek jest wymagany")
    .positive("Wiek nie może być ujemny")
    .integer(),
  topic: yup.string().required("Temat jest wymagany"),
});

const CreateTaleForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const taleContent = useSelector(
    (state: RootState) => state.createTale.data.content
  );

  const formik = useFormik({
    initialValues: {
      age: 0,
      child_name: "",
      topic: "dinosaurs",
    },
    validationSchema: validationSchema,
    onSubmit: (values: TaleModel, { resetForm }) => {
      dispatch(TaleThunk.createTale(values));
      resetForm();
    },
  });
  
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
          value={formik.values.age || ''}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
        />
        <Select
          id="topics"
          name="topics"
          label="Temat"
          value={formik.values.topic}
          onChange={formik.handleChange}
          error={formik.touched.topic && Boolean(formik.errors.topic)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="dinosaurs">Dinozaury</MenuItem>
          <MenuItem value="space">Kosmos</MenuItem>
          <MenuItem value="pokemon">Pokemon</MenuItem>
        </Select>
        <Button type="submit" variant="contained">
          Stwórz bajkę
        </Button>
      </FormControl>
      {taleContent && taleContent}
    </>
  );
};

export default CreateTaleForm;