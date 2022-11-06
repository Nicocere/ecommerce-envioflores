import React from 'react';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const [prodEncontrado, setProdEncontrado] = useState()

     console.log("PROD ENCONTRADO", prodEncontrado)

    const changeList = (itemsFiltrados) =>{
        // console.log("ITEM FILTRADO", itemsFiltrados)
        setProdEncontrado([itemsFiltrados])
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