import { useContext, createContext } from 'react';

// eslint-disable-next-line no-undef
export const UserContext = createContext();

export const useThemeContext = () => useContext(UserContext);
