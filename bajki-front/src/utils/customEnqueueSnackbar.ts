import { enqueueSnackbar, VariantType, SnackbarKey } from "notistack";

const customEnqueueSnackbar = ({
  message,
  variant,
}: {
  message: string;
  variant: VariantType;
}): SnackbarKey => {
  const key = enqueueSnackbar(message, {
    variant: variant,
  });
  return key;
};

export default customEnqueueSnackbar;
