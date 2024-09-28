import {createContext,useContext} from "react";


// context api 
export const ThemeContext=createContext({
    //components to be used 
    themeMode:"dark",
    darkTheme:()=>{},
    lightTheme:()=>{},

})

//provider to access the values from the components

export const ThemeProvider=ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}