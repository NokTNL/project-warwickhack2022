import { useSelector } from "react-redux";
import "./OutputBlock.css";

export default function OutputBlock() {
  const isShowingOutput = useSelector((state) => state.output.isShowingOutput);

  return (
    <div className="output-block">
      <h4>Output</h4>
      <div className="output-block__data">
        {isShowingOutput && [
          <div>
            e|----------------------------------------------------------------|
          </div>,
          <div>
            B|----------------------------------------------------------------|
          </div>,
          <div>
            G|----------------------2-----------------------------------------|
          </div>,
          <div>
            D|----------------------3-----------------------------------------|
          </div>,
          <div>
            A|----------------------5-----------------------------------------|
          </div>,
          <div>
            E|----------------------------------------------------------------|
          </div>,
        ]}
      </div>
    </div>
  );
}
