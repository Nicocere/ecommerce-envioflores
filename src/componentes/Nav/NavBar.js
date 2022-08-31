import React from 'react'
import estilos from './nav.module.css'
import Logo from '../../imagenes/EnvioFlores3.png'
import CartWidget from '../CartWidget/CartWidget'

import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
        <img src={Logo} alt="logo envio flores"/>  
            <ul className='seccion'>

            <li className='seccionLi'>
                    <NavLink to='/'>Home</NavLink> 
                </li>

                <li className='seccionLi'>
                    <NavLink to='/categoria/Rosas'>Rosas</NavLink> 
                </li>
                <li className='seccionLi'>
                    <NavLink to="/categoria/Canasta">Canastas</NavLink>
                </li>
                <li className='seccionLi'>
                    <NavLink to="/categoria/Florero">Floreros</NavLink>
                </li>
 
                <li className='seccionLi'>
                    <NavLink to="/categoria/Comestible">Comestibles</NavLink>
                </li>

                <li className='seccionLi'>
                    <NavLink to="/categoria/Desayuno">Desayunos</NavLink>
                </li>

            </ul>
                
                {/* <div className='seccionLi-Fechas'>
                    <NavLink to="/category/Fechas Especiales">Fechas Especiales</NavLink>
                </div> */}

            <NavLink to="/Carrito">
                
            <CartWidget />
            </NavLink>

    </nav>
  );
};

export default NavBar