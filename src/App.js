import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
