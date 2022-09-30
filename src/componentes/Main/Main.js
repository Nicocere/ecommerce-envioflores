import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {Routes, Route} from 'react-router-dom'
import Cart from '../Cart/Cart';


const Main = () => {

  return (
  <main className='main'>  

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />

         <Route path='/categoria/:categoryName' element={<ItemListContainer/>}/> 


        <Route path='/detail/:prodId' element={<ItemDetailContainer/>} />
        

        <Route path="/Carrito" element={<Cart/>} />
      
      </Routes>
    </main>
  );


};

export default Main