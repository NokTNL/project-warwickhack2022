import "./App.css";
import Header from "./components/Header";
import InputBlock from "./components/InputBlock";
import OutputBlock from "./components/OutputBlock";
import Upload from "./components/Upload";
// import UseDemoBlock from "./components/UseDemoBlock";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Upload></Upload>
      {/* <UseDemoBlock></UseDemoBlock> */}
      <InputBlock></InputBlock>
      <OutputBlock />
    </div>
  );
}

export default App;
