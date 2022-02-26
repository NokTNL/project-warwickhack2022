import InputImage from "./InputBlock/InputImage";
import InputKey from "./InputBlock/InputKey";
import SubmitInputButton from "./InputBlock/SubmitInputButton";

import "./InputBlock.css";

export default function InputBlock() {
  return (
    <div className="input-block">
      <h4>Input</h4>
      <InputImage />
      <InputKey />
      <SubmitInputButton />
    </div>
  );
}
