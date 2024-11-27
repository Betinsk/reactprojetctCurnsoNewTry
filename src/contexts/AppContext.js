import { createContext } from "react"

const GlobalContext = createContext()

export const AppContext = ({children}) => {
    return <GlobalContext.Provider></GlobalContext.Provider>
}