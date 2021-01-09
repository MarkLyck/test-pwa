import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Compose from './Compose'
import lightTheme from './themes/light'

type AppProviderProps = {
    children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <Compose components={[
            [ThemeProvider, { theme: lightTheme }]
        ]}>
            {children}
        </Compose>
    )
}

export default AppProvider
