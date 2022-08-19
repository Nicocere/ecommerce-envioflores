import React from 'react'
import estilos from './nav.module.css'
import Logo from '../../imagenes/EnvioFlores.jpg'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
        <img src={Logo} alt="logo envio flores"/>  
            <ul className='seccion'>

                <li className='seccionLi'>
                    <a href="https//google.com">Categorias</a>
                </li>
                <li className='seccionLi'>
                    <a href="https//google.com">Fechas Especiales</a>
                </li>

            </ul>

            <CartWidget />

    </nav>
  );
};

export default NavBar