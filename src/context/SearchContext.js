import React from 'react';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const [prodEncontrado, setProdEncontrado] = useState()

     console.log("PROD ENCONTRADO", prodEncontrado)

    const changeList = (itemEncontrado) =>{
       
        console.log("ITEM ENCONTRADO CONTEXT", itemEncontrado)
        setProdEncontrado(itemEncontrado)
    }

 
    return (
        <SearchContext.Provider
        value={{ 
            prodEncontrado,
            changeList
             }}>  
                
                 {children}
        </SearchContext.Provider>
    );


}

export default SearchProvider;