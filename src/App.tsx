import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled'
import './App.css';
import { useAtom } from 'jotai'
import { themeAtom } from 'src/atoms'

const Test = styled.div`
  background: ${p => p.theme.palette.text[100]};
`

function App() {
  const [theme, setTheme] = useAtom(themeAtom)

  return (
    <Test className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setTheme(theme.type === 'light' ? 'dark' : 'light')}>test theme</button>
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
