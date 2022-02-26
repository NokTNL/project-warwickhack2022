import { useDispatch } from "react-redux";
import { actions } from "../store/main";

export default function Upload() {
<<<<<<< HEAD
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
=======


  return (
    <div>
      <form onSubmit={{ handlesubmit }}>
        <input type='file' id='image' name='file' />
        <button type='submit'>Upload</button>
      </form>
      <span>Upload Score</span>
>>>>>>> 28c17f7da33086bd1c3e954478f1b3765dfc2c2b
    </div>
  );
}
