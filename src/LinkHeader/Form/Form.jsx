import react from "react";
import { TextField, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_URL } from "../../graphql/mutation";
const Form = ({ originalUrl, setOriginalUrl }) => {
  const [createLink] = useMutation(CREATE_URL, {
    refetchQueries: ["getAllLink"]
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "url") {
      setOriginalUrl(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (originalUrl === "") {
      alert("Please enter Url");
    }
    createLink({
      variables: {
        url: originalUrl
      }
    });
  };
  return (
    <form
      onSubmit={(e) => {
        handleChange(e);
      }}
    >
      <TextField
        style={{ padding: 10 }}
        size="small"
        name="url"
        id="url"
        label="Long Url"
        onChange={handleChange}
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
      <Button
        style={{ margin: 15 }}
        color="inherit"
        variant="outlined"
        size="small"
        type="submit"
        onClick={handleSubmit}
      >
        Shorten Url
      </Button>
    </form>
  );
};

export default Form;
