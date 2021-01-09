import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled'
import './App.css';
import { useAtom } from 'jotai'
import { setThemeAtom } from 'src/atoms'

const Test = styled.div`
  background: ${p => p.theme.palette.text[100]};
`

function App() {
  const [, setTheme] = useAtom(setThemeAtom)

  return (
    <Test className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setTheme('dark')}>test theme</button>
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
