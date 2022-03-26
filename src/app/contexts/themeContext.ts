import * as React from 'react';

export const ThemeContext = React.createContext({
    darkMode: localStorage.getItem("theme") === "dark",
    changeMode: () => { },
});