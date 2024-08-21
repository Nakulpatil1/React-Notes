import {createContext, useContext} from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darktheme: () =>{},
    lighttheme: () =>{},

})
export default ThemeContext 

export const Themeprovider = ThemeContext.Provider

