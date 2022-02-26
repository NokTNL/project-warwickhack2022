import { useDispatch } from "react-redux";
import submitInputThunk from "../../store/submitInputThunk";

export default function SubmitInputButton() {
  const dispatch = useDispatch();

  const handleSubmitInput = () => {
    // get the File object from the input field that has id = "input-file" (i.e. in Upload.js)
    const file = document.getElementById("input-file").files[0];
    dispatch(submitInputThunk({ file }));
  };

  return <button onClick={handleSubmitInput}>Generate TAB</button>;
}
