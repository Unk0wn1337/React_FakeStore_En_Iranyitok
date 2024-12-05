import React, { createContext, useState } from "react";

export const  KosarContext = createContext("");

export const KosarProvider = ({ children }) => {

    const [kosarLista, setKosarLista] = useState([]);

    function kosarbaKattintas(props) {
        const segedKosar = [...kosarLista];
        segedKosar.push(props)
        setKosarLista(segedKosar);
    }
    
    return <KosarContext.Provider value={{ kosarLista, kosarbaKattintas}}>
                {children}
           </KosarContext.Provider>

}