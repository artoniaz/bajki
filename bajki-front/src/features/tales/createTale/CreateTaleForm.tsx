import TaleModel from "../../../models/TaleModel";
import { FormControl, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createTaleValidationSchema } from "./createTaleValidationSchema";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Status } from "../../../utils/stateStatus";
import taleActions from "../talesActions";
import StyledTextField from "../../../components/StyledTextField";
import StyledLoadingButton from "../../../components/StyledLoadingButton";
import FormBox from "../../../components/FormBox";
import { reset } from "./createTaleSlice";

const CreateTaleForm = () => {
  const dispatch = useAppDispatch();

  const { status, error } = useAppSelector((state) => state.createTale);
  const { userProfile } = useAppSelector((state) => state.auth.data);
  const formik = useFormik({
    initialValues: {
      user_id: "",
      child_name: "",
      age: 0,
      topic: "",
    },
    validationSchema: createTaleValidationSchema,
    onSubmit: (values: TaleModel) => {
      values.user_id = userProfile?.id ?? "";
      dispatch(taleActions.createTale(values));
      formik.resetForm();
    },
  });

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <FormBox status={status} error={error}>
      <Typography variant="h2" alignSelf="center">
        Stwórz bajkę
      </Typography>
      <FormControl
        component={"form"}
        sx={{ pt: 2 }}
        onSubmit={(val) => formik.handleSubmit(val)}
      >
        <StyledTextField
          id="child_name"
          name="child_name"
          label="Wpisz imię dziecka *"
          type="text"
          size="small"
          sx={{ mb: 2 }}
          value={formik.values.child_name}
          onChange={formik.handleChange}
          error={formik.touched.child_name && Boolean(formik.errors.child_name)}
        />
        <StyledTextField
          id="age"
          name="age"
          label="Podaj wiek *"
          type="number"
          size="small"
          sx={{ mb: 2 }}
          value={formik.values.age || ""}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
        />
        <StyledTextField
          select
          id="topic"
          name="topic"
          size="small"
          label="Wybierz temat"
          value={formik.values.topic}
          onChange={formik.handleChange}
          error={formik.touched.topic && Boolean(formik.errors.topic)}
          sx={{ mb: 2 }}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: "#000",
                  border: "1px solid white",
                  borderRadius: 2,
                },
              },
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "success.main",
                  },
                  "& .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: "success.main",
                  },
                },
              },
            },
          }}
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
          size='large'
        >
          Stwórz bajkę
        </StyledLoadingButton>
      </FormControl>
    </FormBox>
  );
};

export default CreateTaleForm;
