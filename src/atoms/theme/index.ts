import { atom } from 'jotai'
import themes, { themeNameType } from 'src/lib/themes'

const DEFAULT_THEME = themes.light

export const themeAtom = atom(DEFAULT_THEME)

export const setThemeAtom = atom(
    (get) => get(themeAtom),
    (_, set, arg: themeNameType) => {
        set(themeAtom, themes[arg])
    })