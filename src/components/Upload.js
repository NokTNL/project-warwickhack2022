import { useDispatch } from "react-redux";
import { actions } from "../store/main";
import { Button, Input, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "./Upload.css";

export default function Upload() {
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    dispatch(actions.input.uploadFile({ url }));
  };

  return (
    <div className="upload-block">
      <label htmlFor="input-file">
        <Input
          sx={{ display: "none" }}
          accept="image/*"
          type="file"
          onChange={handleFileUpload}
          id="input-file"
        />
        <Button variant="outlined" component="span">
          Upload Score
        </Button>

        <label htmlFor="icon-file-camera">
          <Input
            sx={{ display: "none" }}
            accept="image/*"
            id="icon-file-camera"
            type="file"
            onChange={handleFileUpload}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </label>
    </div>
  );
}
