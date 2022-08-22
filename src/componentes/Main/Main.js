import React from 'react'
import {stockProductos} from '../../data'
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Main = () => {
  console.log(stockProductos )
  return (
    <main className='productos'>  
        {stockProductos.map(item => (
          <ItemListContainer producto={item} />
        ))};
    </main>
  );
};

export default Main