import React from 'react'
import estilos from './nav.module.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import {FaBars} from '@react-icons/all-files/fa/FaBars'
import { useState } from 'react'



const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)



  const openMenu = showMobileMenu ? 'seccion' : 'seccionCerrada';
  
  return (
    <nav className={estilos.navBar}>
        <NavLink to='/' >
          <img  className={estilos.imgNavBar} src={'../assets/imagenes/logo-envio-flores.png'} alt="logo envio flores"/>  
          </NavLink>
            
          

        <div className='barMovil' onClick={()=> setShowMobileMenu(!showMobileMenu)}>
        <FaBars/>Categorias
        </div>

      <div>
          
      </div>
            <ul className={openMenu} >
                  <NavLink className='seccionLi' to='/' onClick={()=> setShowMobileMenu(!showMobileMenu)}> Todos </NavLink> 

                    <NavLink className='seccionLi' to='./categoria/Rosas' onClick={()=> setShowMobileMenu(!showMobileMenu)}>Rosas</NavLink> 
                
                    <NavLink className='seccionLi' to="/categoria/Florero" onClick={()=> setShowMobileMenu(!showMobileMenu)}>Floreros</NavLink>
                
                    <NavLink  className='seccionLi' to="/categoria/Ramos" onClick={()=> setShowMobileMenu(!showMobileMenu)}>Ramos</NavLink>
               
                    <NavLink className='seccionLi' to="/categoria/Comestible" onClick={()=> setShowMobileMenu(!showMobileMenu)}>Comestibles</NavLink>
                
                    <NavLink className='seccionLi' to="/categoria/Desayuno" onClick={()=> setShowMobileMenu(!showMobileMenu)}>Desayunos</NavLink>

            </ul>

                
      <NavLink to="/Carrito">
          <CartWidget />
      </NavLink>

    </nav>
  );
};

export default NavBar