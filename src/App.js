import "./App.css";
import "./global.css";
import Header from "./components/Header";
import InputBlock from "./components/InputBlock";
import OutputBlock from "./components/OutputBlock";
import Upload from "./components/Upload";
import UseDemoBlock from "./components/UseDemoBlock";

import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const isShowingOutput = useSelector((state) => state.output.isShowingOutput);

  return (
    <div className="App">
      <Header />
      <Upload />
      <UseDemoBlock />
      <InputBlock />
      {isShowingOutput && <OutputBlock />}
      <Footer />
    </div>
  );
}

export default App;
