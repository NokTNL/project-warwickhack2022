import { useDispatch } from "react-redux";
import { actions } from "../../store/main";

import TextField from "@mui/material/TextField";

export default function InputKey() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(actions.input.inputKey({ key: event.target.value }));
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="Key"
        helperText="e.g. C, D, E"
        onChange={handleChange}
      />
    </div>
  );
}
