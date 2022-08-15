import React, { useContext } from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
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
    <Container className="App">
      <Header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>

        <Button primary className="App-button" onClick={handleClick}>
          {`Clicks: ${appData.clicks}`}
        </Button>
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

const Link = styled.a`
  color: #61dafb;
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

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Container = styled.div`
  text-align: center;
`;

export default App;
