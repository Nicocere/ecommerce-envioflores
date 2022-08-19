import React from 'react'
import {stockProductos} from '../../data'
import Item from '../ItemListContainer/ItemListContainer';



const Main = () => {
  console.log(stockProductos )
  return (
    <main className='productos'>  
        {stockProductos.map(item => (
          <Item producto={item} />
        ))};
    </main>
  );
};

export default Main