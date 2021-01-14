import React from 'react'
import { render } from '@testing-library/react'
// Providers
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from '@emotion/react'
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
// Utils
import Compose from 'src/lib/Compose'
import themes, { antDThemeMap } from 'src/lib/themes'
import 'src/lib/iconLibrary'

const AllTheProviders = ({ children }: any) => {
  return (
    <Compose
      components={[
        JotaiProvider,
        [ThemeSwitcherProvider, { themeMap: antDThemeMap, defaultTheme: 'light' }],
        [ThemeProvider, { theme: themes.light }]
      ]}
    >
      {children}
    </Compose>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
