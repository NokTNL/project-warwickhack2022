import { useSelector } from "react-redux";
import "./OutputBlock.css";

export default function OutputBlock() {
  const isShowingOutput = useSelector((state) => state.output.isShowingOutput);

  return (
    <div className="output-block">
      <h4>Output</h4>
      {isShowingOutput && (
        <img
          src="https://www.mccabetuition.com/wp-content/uploads/2018/01/0-Tab-.jpg"
          alt=""
        />
      )}
    </div>
  );
}
