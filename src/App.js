import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppContext";
import axios from "axios";

function App() {
  const { appData, appDispatch } = useContext(AppContext);
  const [inputText, setInputText] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("inputText", inputText);

    const ships = await getShips(inputText);
    console.log(ships);
    appDispatch({
      type: "add-result",
      payload: ships?.data?.results || [],
    });
  };

  const handleAddToFleet = (e, shipToAdd) => {
    e.preventDefault();
    appDispatch({
      type: "add-ship",
      payload: shipToAdd || {},
    });
  };
  const handleDelete = (e, index) => {
    e.preventDefault();
    appDispatch({
      type: "delete-ship",
      payload: index,
    });
  };

  const handleOnChange = (text) => {
    setInputText(text);
  };

  const getShips = async (text) => {
    const results = await axios({
      method: "get",
      url: `https://swapi.dev/api/starships/?search=${text}`,
    });
    return results;
  };

  return (
    <Container className="App">
      <Header className="App-header">
        <input
          value={inputText}
          type="text"
          id="name"
          onChange={(e) => handleOnChange(e.target.value)}
        ></input>
        <Button primary className="App-button" onClick={handleClick}>
          {`Search`}
        </Button>
        {appData.latestResult.map((ship) => (
          <Button
            onClick={(e) => handleAddToFleet(e, ship)}
            key={`${ship.name}-${Math.trunc(Math.random() * 100)}`}
          >
            {ship.name}
          </Button>
        ))}

        {appData.fleet.map((ship, index) => (
          <>
            <div key={ship.name}>{ship.name}</div>
            <button onClick={(e) => handleDelete(e, index)}>delete</button>
          </>
        ))}
      </Header>
    </Container>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Container = styled.div`
  text-align: center;
`;

export default App;
