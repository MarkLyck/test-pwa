import React from 'react'
import { render } from '@testing-library/react'
// Providers
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from '@emotion/react'
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
// Utils
import ComposeProviders from 'src/lib/ComposeProviders'
import themes, { antDThemeMap } from 'src/lib/themes'
import 'src/lib/iconLibrary'

const AllTheProviders = ({ children }: any) => {
  return (
    <ComposeProviders
      components={[
        JotaiProvider,
        [ThemeSwitcherProvider, { themeMap: antDThemeMap, defaultTheme: 'light' }],
        [ThemeProvider, { theme: themes.light }]
      ]}
    >
      {children}
    </ComposeProviders>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
