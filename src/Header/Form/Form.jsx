import react from "react";
import { TextField } from "@mui/material";
const Form = () => {
  return (
    <form>
      <TextField
        style={{ padding: 10 }}
        size="small"
        name="url"
        id="url"
        label="Long Url"
        value="url"
      />
      <TextField
        style={{ padding: 10 }}
        size="small"
        name="slug"
        id="slug"
        label="Custom Slug"
        value="url"
      />
    </form>
  );
};

export default Form;
