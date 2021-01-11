import React from 'react'
import logo from './logo.svg'
import styled from '@emotion/styled'
import './App.css'
import { Card } from 'antd'
import GlobalStyles from 'src/lib/GlobalStyles'
import ThemeSwitch from 'src/components/ThemeSwitch'

const Test = styled.div`
  background: ${(p) => p.theme.palette.text[100]};
`

const App = () => (
  <Test className="App">
    <GlobalStyles />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Card>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ThemeSwitch />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Card>
    </header>
  </Test>
)

export default App
