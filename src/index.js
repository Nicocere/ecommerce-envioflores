import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './context/CartContext';
import SearchProvider from './context/SearchContext';
// import { MercadoPago } from 'mercadopago/interface';


// const MercadoPago = require("mercadopago");

// // // Agrega credenciales
// MercadoPago.configure({
//   access_token: "TEST-6697630191900515-100216-5cee709f4f62fac9c1869b30d44a0290-115371331",
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
    <SearchProvider>
    <App />

    </SearchProvider>
    </CartProvider>

);

