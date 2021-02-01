import { useContext, createContext } from 'react';

// eslint-disable-next-line no-undef
export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);
