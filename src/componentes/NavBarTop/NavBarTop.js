import React from 'react'
import style from './navTop.module.css'
import {SiInstagram} from '@react-icons/all-files/si/SiInstagram'
import {ImFacebook2} from '@react-icons/all-files/im/ImFacebook2'
import {HiOutlineMail} from '@react-icons/all-files/hi/HiOutlineMail'
import {FiPhoneCall} from '@react-icons/all-files/fi/FiPhoneCall'

const NavBarTop = () => {

  return (
    <div className={style.navTop}>
        
        <div className={style.divContacto}>

          <div className={style.contactoTel}>
              <a href="tel:+54 9 11 4788 9185" className={style.contacto} ><FiPhoneCall/> +54 9 11 4788 9185</a>

          </div>
          <div className={style.contactoMail}>
            
              <a href="mailto:regalosflores25@gmail.com" className={style.contacto} > <HiOutlineMail/> Regalosflores25@gmail.com </a>

          </div>
        
        <div className={style.direc} >
              <a href='https://g.page/floresexpres?share' className={style.dir} >Av.Cramer 1915</a>

        </div>

    </div>
    
    <div className={style.divContacto}>

        <div className={style.redesSociales}>
            <a href="http://facebook.com/flores.aflorar" className={style.redFacebook} >  <ImFacebook2 /> </a>
          
        </div> 

        <div className={style.redesSociales}>
            <a href="http://instagram.com/aflorar.arg" className={style.redInsta} > <SiInstagram  /></a>
          
        </div> 
    </div>

    </div>
  )
}

export default NavBarTop