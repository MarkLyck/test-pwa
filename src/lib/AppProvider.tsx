import React from 'react'
import { Provider as JotaiProvider, useAtom } from 'jotai'
import { ThemeProvider } from '@emotion/react'
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Compose from './Compose'
import { themeAtom } from 'src/atoms'
import "antd/dist/antd.css"

export const themeMap = {
  light: `${process.env.PUBLIC_URL}/antd/light-theme.css`,
  dark: `${process.env.PUBLIC_URL}/antd/dark-theme.css`,
};

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [theme] = useAtom(themeAtom)

  return <Compose components={[
    [ThemeSwitcherProvider, { themeMap, defaultTheme: theme.type }],
    [ThemeProvider, { theme }]
  ]}>{children}</Compose>
}

const Wrapper = (props: any) => (
  <JotaiProvider>
    <AppProvider {...props} />
  </JotaiProvider>
)

export default Wrapper
