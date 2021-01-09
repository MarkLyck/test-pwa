import React from 'react'
import { Provider as JotaiProvider, useAtom } from 'jotai'
import { ThemeProvider } from '@emotion/react'
import Compose from './Compose'
import { themeAtom } from 'src/atoms'

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [theme] = useAtom(themeAtom)

  return <Compose components={[[ThemeProvider, { theme }]]}>{children}</Compose>
}

const Wrapper = (props: any) => (
  <JotaiProvider>
    <AppProvider {...props} />
  </JotaiProvider>
)

export default Wrapper
