import React from 'react'
import styled from '@emotion/styled'
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useAtom } from 'jotai'
import { themeAtom } from 'src/atoms'
import { Switch } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SwitchIcon = styled(FontAwesomeIcon)`
    height: 10px;
    width: 10px;
`

const StyledSwitch = styled(Switch, { shouldForwardProp: p => p !== 'themeType' })`
&& {
    background-color: ${(p: { theme?: any, themeType: string }) => p.themeType === 'light'
        ? p.theme.palette.warning[400]
        : p.theme.palette.basic[400]
    };
}
`

const ThemeSwitch = () => {
    const [theme, setTheme] = useAtom(themeAtom)
    const { switcher } = useThemeSwitcher();

    const onChange = () => {
        const newTheme = theme.type === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        switcher({ theme: newTheme });
    }

    return (
        <StyledSwitch
            aria-label="switch theme"
            onChange={onChange}
            themeType={theme.type}
            defaultChecked={theme.type === 'light'}
            checkedChildren={<SwitchIcon icon={['fad', 'sun']} />}
            unCheckedChildren={<SwitchIcon icon="moon" />}
        />
    )
}

export default ThemeSwitch
