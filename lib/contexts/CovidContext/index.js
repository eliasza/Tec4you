import { useState, createContext } from "react";
import { useRouter } from "next/router";

export const CovidContext = createContext({})

export const CovidProvider=({children}) => {
    const router = useRouter();
    
    const handleClick = (e, href) => {
        router.push(href)
    }

    return(
        <CovidContext.Provider value={{handleClick}}>{children}</CovidContext.Provider>
    )
}  