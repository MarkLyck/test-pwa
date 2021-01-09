import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled'
import './App.css';

const Test = styled.div`
  background: ${p => p.theme.palette.danger[500]};
`

function App() {
  return (
    <Test className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Test>
  );
}

export default App;
