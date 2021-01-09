import { default as light } from './light'
import { default as dark } from './dark'

export type themeNameType = 'light' | 'dark'

const themes = {
  light,
  dark,
}

export default themes
