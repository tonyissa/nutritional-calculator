export type ThemeType = "light" | "dark";

export interface IThemeContext {
    theme: ThemeType,
    toggleTheme: () => void
}

export interface ThemeProps {
    children: React.ReactNode
}