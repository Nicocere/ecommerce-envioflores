import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {Routes, Route} from 'react-router-dom'
import Cart from '../Cart/Cart';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


const Main = () => {

  return (
  <main className='main'>  

<ScrollToTop/>
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