import { useSelector } from "react-redux";
import "./InputImage.css";

export default function InputImage() {
  const imgUrl = useSelector((state) => state.input.imgUrl);

  return <img className="input-image" alt="" src={imgUrl} />;
}
