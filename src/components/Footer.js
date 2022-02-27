import "./Footer.css";
import tensorFlowLogo from "../img/tensorflow.png";

export default function Footer() {
  return (
    <footer>
      Powered by
      <img src={tensorFlowLogo} alt="" />
    </footer>
  );
}
