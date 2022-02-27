import "./OutputBlock.css";
import { Typography } from "@mui/material";

export default function OutputBlock() {
  return (
    <div className="output-block">
      <div className="output-block__heading">Robot says:</div>
      <div className="output-block__data">
        {[
          <div>e|---------------------------|</div>,
          <div>B|---------------------------|</div>,
          <div>G|---------------2-----------|</div>,
          <div>D|---------------3-----------|</div>,
          <div>A|---------------5-----------|</div>,
          <div>E|---------------------------|</div>,
        ]}
      </div>
    </div>
  );
}
