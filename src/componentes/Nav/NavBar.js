import React from 'react'
import estilos from './nav.module.css'
import Logo from '../../imagenes/EnvioFlores3.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
        <img src={Logo} alt="logo envio flores"/>  
            <ul className='seccion'>

                <li className='seccionLi'>
                    <a href="https//google.com">Rosas</a>
                </li>
                <li className='seccionLi'>
                    <a href="https//google.com">Canastas</a>
                </li>
                <li className='seccionLi'>
                    <a href="https//google.com">Floreros</a>
                </li>
                <li className='seccionLi'>
                    <a href="https//google.com">Arreglos Especiales</a>
                </li>
                <li className='seccionLi'>
                    <a href="https//google.com">Comestibles</a>
                </li>

                <li className='seccionLi'>
                    <a href="https//google.com">Desayunos</a>
                </li>
                <li className='seccionLi-Fechas'>
                    <a href="https//google.com">Fechas Especiales</a>
                </li>

            </ul>

            <CartWidget />

    </nav>
  );
};

export default NavBar