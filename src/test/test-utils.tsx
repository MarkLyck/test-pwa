import React from 'react'
import { render } from '@testing-library/react'
// Providers
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from '@emotion/react'
// Utils
import Compose from 'src/lib/Compose'
import themes from 'src/lib/themes'

const AllTheProviders = ({ children }: any) => {
    return (
        <Compose components={[
            JotaiProvider,
            [ThemeProvider, { theme: themes.light }]
        ]}>
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