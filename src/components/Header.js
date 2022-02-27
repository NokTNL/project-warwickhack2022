import "./Header.css";
import mainLogo from "../img/main-logo.png";

export default function Header() {
  return (
    <header>
      <img src={mainLogo} alt="" />
      <h1>Robot tells you where to put your fingers</h1>
    </header>
  );
}
