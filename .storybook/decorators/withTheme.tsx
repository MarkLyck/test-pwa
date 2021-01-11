import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { Provider, useAtom } from 'jotai'
import { themeAtom } from '../../src/atoms'
import 'src/lib/iconLibrary'

export const themeMap = {
  light: `${process.env.PUBLIC_URL}/antd/light-theme.css`,
  dark: `${process.env.PUBLIC_URL}/antd/dark-theme.css`,
};


const ThemeContainer = ({ children }) => {
  const [theme] = useAtom(themeAtom)
  return (
    <ThemeSwitcherProvider themeMap={themeMap} defaultTheme={theme.type}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitcherProvider >
  )
}

const withJotaiTheme = (storyFn: any) => {
  return (
    <Provider>
      <ThemeContainer>{storyFn()}</ThemeContainer>
    </Provider>
  )
}

export default withJotaiTheme
