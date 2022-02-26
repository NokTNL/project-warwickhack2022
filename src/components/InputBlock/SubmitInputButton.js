import { useDispatch } from "react-redux";
import submitInputThunk from "../../store/submitInputThunk";

export default function SubmitInputButton() {
  const dispatch = useDispatch();

  const handleSubmitInput = () => {
    // get the File object from the input field that has id = "input-file" (i.e. in Upload.js)
    const file = document.getElementById("input-file").files[0];
    const inputKey = document.querySelector(".input-key").value;
    dispatch(submitInputThunk({ file, inputKey }));
  };

  return <button onClick={handleSubmitInput}>Generate TAB</button>;
}
