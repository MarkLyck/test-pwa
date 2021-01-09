import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Provider, useAtom } from 'jotai'
import { themeAtom } from '../../src/atoms'

const ThemeContainer = ({ children }) => {
    const [theme] = useAtom(themeAtom)
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const withJotaiTheme = (storyFn: any) => {
    return (
        <Provider>
            <ThemeContainer>
                {storyFn()}
            </ThemeContainer>
        </Provider>
    )
}

export default withJotaiTheme
