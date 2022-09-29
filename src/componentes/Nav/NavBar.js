import React from 'react'
import estilos from './nav.module.css'
import CartWidget from '../CartWidget/CartWidget'


import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
        <img  className={estilos.imgNavBar} src={'../assets/imagenes/logo-envio-flores.png'} alt="logo envio flores"/>  
            <ul className='seccion'>

        <NavLink className='seccionLi' to='/'> Home </NavLink> 

                    <NavLink className='seccionLi' to='./categoria/Rosas'>Rosas</NavLink> 
                
                    <NavLink className='seccionLi' to="/categoria/Florero">Floreros</NavLink>
                
                    <NavLink  className='seccionLi' to="/categoria/Ramos">Ramos</NavLink>
               
                    <NavLink className='seccionLi' to="/categoria/Comestible">Comestibles</NavLink>
                
                    <NavLink className='seccionLi' to="/categoria/Desayuno">Desayunos</NavLink>

            </ul>
                
            <NavLink to="/Carrito">
                
            <CartWidget />
            </NavLink>

    </nav>
  );
};

export default NavBar