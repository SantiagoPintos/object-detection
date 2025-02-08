import { Alert } from "@mui/material";

export const Error = () => {
  return (
    <div>
        <Alert severity="error" variant="outlined">
          Something went wrong. Please try again later.
        </Alert>
    </div>
  );
};