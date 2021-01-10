import React from 'react'
import logo from './logo.svg'
import styled from '@emotion/styled'
import { useThemeSwitcher } from "react-css-theme-switcher";
import './App.css'
import { useAtom } from 'jotai'
import { themeAtom } from 'src/atoms'
import { Button, Card } from 'antd'
import GlobalStyles from 'src/lib/GlobalStyles'

const Test = styled.div`
  background: ${(p) => p.theme.palette.text[100]};
`

function App() {
  const [theme, setTheme] = useAtom(themeAtom)
  const { switcher, themes } = useThemeSwitcher();

  return (
    <Test className="App">
      <GlobalStyles />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card>

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Button
            onClick={() => {
              switcher({ theme: theme.type === 'light' ? themes.dark : themes.light });
              setTheme(theme.type === 'light' ? 'dark' : 'light')
            }}
          >
            test theme
        </Button>
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
}

export default App
