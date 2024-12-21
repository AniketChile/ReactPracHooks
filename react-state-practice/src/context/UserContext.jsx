import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
    const phone = "+91-7304154052"
    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;
