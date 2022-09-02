import { FiPhoneCall } from '@react-icons/all-files/fi/FiPhoneCall';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import { ImFacebook2 } from '@react-icons/all-files/im/ImFacebook2';
import { SiInstagram } from '@react-icons/all-files/si/SiInstagram';
import estilos from './footer.module.css'

const Footer = () => {
return ( 

    <footer className={estilos.foot}>
    
    <div className={estilos.linkFot}>
        <h3> Sitio Web Oficial</h3>
    <a  className={estilos.webAflorar} href="http://aflorar.com.ar"> Visita nuestro WEB OFICIAL AFLORAR</a>
    <p className={estilos.textoWebAflorar}> Floreria en linea, venta de flores en Ramos / Floreros / Desayunos y Meriendas /
        Chocolates / Peluches / Vinos y más</p>
    </div>

    <div className="col-footer"> 
       <div className="mediosDePago"> 
            <h3>Medios De Pago</h3>
            <p> Todos los medios de pago. Paypal, Mercado Pago, Tarjeta de Credito,
            Efectivo </p> 
            <img src= {'../assets/visa@2x.png'} className="tarjetaFoot"  alt=""/>
            <img src={"../assets/cabal@2x.png"}  className="tarjetaFoot" alt=""/>
            <img src={"../assets/mastercard@2x.png"}  className="tarjetaFoot" alt=""/>
            <img src={"../assets/mercadopago@2x.png"}  className="tarjetaFoot" alt=""/>
            <img src={"../assets/pagofacil@2x.png"}  className="tarjetaFoot" alt=""/>
            <img src={"../assets/paypal@2x.png"}  className="tarjetaFoot" alt=""/>
            <img src={"../assets/visa@2x.png"}   className="tarjetaFoot"alt=""/>
            <img src={"../assets/banelco@2x.png" }  className="tarjetaFoot"alt=""/>
        </div>
    </div>

    <div className={estilos.contacto}>
        <h3>Contactanos</h3>
        <a href="tel:+54 9 11 4788 9185" className={estilos.contactoTel}><FiPhoneCall/> +54 9 11 4788 9185</a>
        
        <a href="mailto:regalosflores25@gmail.com" className={estilos.contactoMail}><HiOutlineMail/> Regalosflores25@gmail.com </a>

    </div>
    
    <div className={estilos.socialBarFooter}> 
        <h3> Redes Sociales</h3>
        <a href="http://facebook.com/flores.aflorar" className={estilos.fbFoot}><ImFacebook2/> Facebook</a>
        <a href="http://instagram.com/aflorar.arg" className={estilos.instFoot}><SiInstagram/> Instagram</a>
    </div>

    </footer>

 );
};

export default Footer;