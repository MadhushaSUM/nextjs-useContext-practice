'use client';

import { useState, createContext } from "react";

export const NameContext = createContext();

export const NameContextProvider = ({ children }) => {
    const [name, setName] = useState("");

    return (
        <NameContext.Provider value={{ name , setName }}>
            {children}
        </NameContext.Provider>
    )
};