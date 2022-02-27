import { useDispatch } from "react-redux";
import submitInputThunk from "../../store/submitInputThunk";
import Button from "@mui/material/Button";

export default function SubmitInputButton() {
  const dispatch = useDispatch();

  const handleSubmitInput = () => {
    // get the File object from the input field that has id = "input-file" (i.e. in Upload.js)
    const file = document.getElementById("input-file").files[0];
    dispatch(submitInputThunk({ file }));
  };

  return (
    <Button
      sx={{ marginTop: "1rem" }}
      variant="contained"
      onClick={handleSubmitInput}
    >
      Ask robot!
    </Button>
  );
}
