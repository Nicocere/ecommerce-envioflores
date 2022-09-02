import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {Routes, Route} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';


const Main = () => {
  
  
  return (

  <main className='main'>  

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />


        <Route path='/categoria/:categoryName' element={<ItemListContainer/>}/>


        <Route path='/detail/:prodId' element={<ItemDetailContainer/>} />
        

        <Route path="/Carrito" element={<CartWidget/>} />
      
      </Routes>
    </main>
  );


};

export default Main