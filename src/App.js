import logo from "./logo.svg";
import "./App.css";

import ChildComponent from "./child.js";
import LikeComponent from "./clickLike";

function App() {
  const text = "Hello react!!";
  const sayHello = function () {
    return <h3> love it React!</h3>;
  };
  const clickHandle = function () {
    alert("Clicked?");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LikeComponent />
        <ChildComponent name="로키" age={20}></ChildComponent>
        <ChildComponent name="토키" age={25}></ChildComponent>
        <h2>{text}</h2>
        {sayHello()}
        <h4 onClick={clickHandle}> Try Click! </h4>
      </header>
    </div>
  );
}

export default App;
