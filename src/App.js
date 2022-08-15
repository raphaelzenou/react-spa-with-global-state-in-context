import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppContext } from "./AppContext";

function App() {
  const { appData, appDispatch } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    appDispatch({
      type: "plus",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button className="App-button" onClick={handleClick}>
          {`Clicks: ${appData.clicks}`}
        </button>
      </header>
    </div>
  );
}

export default App;
