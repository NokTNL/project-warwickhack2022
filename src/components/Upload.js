import { useDispatch } from "react-redux";
import { actions } from "../store/main";

export default function Upload() {
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    dispatch(actions.input.uploadFile({ url }));
  };

  return (
    <div>
      <label htmlFor="input-file">Upload score</label>
      <input
        onChange={handleFileUpload}
        type="file"
        id="input-file"
        accept="image/jpg, image/png, image/gif"
      ></input>
    </div>
  );
}
