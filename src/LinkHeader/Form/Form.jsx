import react from "react";
import { TextField } from "@mui/material";
const Form = ({ originalUrl, setOriginalUrl }) => {
  return (
    <form>
      <TextField
        style={{ padding: 10 }}
        size="small"
        name="url"
        id="url"
        label="Long Url"
        value={originalUrl}
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
