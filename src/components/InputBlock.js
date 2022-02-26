import { useSelector } from "react-redux";

import InputImage from "./InputBlock/InputImage";
import InputKey from "./InputBlock/InputKey";
import SubmitInputButton from "./InputBlock/SubmitInputButton";

import "./InputBlock.css";

export default function InputBlock() {
  const hasImg = useSelector((state) => state.input.hasImg);

  return (
    <div className="input-block">
      <h4>Input</h4>
      {hasImg && <InputImage />}
      <InputKey />
      <SubmitInputButton />
    </div>
  );
}
