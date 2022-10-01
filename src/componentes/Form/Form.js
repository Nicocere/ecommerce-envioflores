import React, { useState, useEffect } from 'react';
import {addDoc, collection, doc, serverTimestamp, updateDoc,} from 'firebase/firestore';
import { baseDeDatos } from '../../FireBaseConfig';

const Form = ({ itemSelected, cart, total, clearCart, handleId }) => {
    
    const [value, setValue] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [validateMail, setValidateMail] = useState('')
    
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorTel, setErrorTel] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [error, setError] = useState(false);



    
    const handleSubmit = (event) => {
         event.preventDefault();

        if(!validation()){
            const buyer = { nombre: nombre, apellido: apellido, phone: phone, mail: mail};
            createOrder(buyer)
        }
    };
    
    const validation = () => {
        let state;
     
        if(nombre  === ""){
            setErrorNombre(true)
          

            state = true
        }else {
            setErrorNombre(false)
        }
        
        if (apellido === "") {
            setErrorApellido(true)
            state = true
        }else{
            setErrorApellido(false)
        }

        if (phone === "" || phone.length <=  4 || phone !== Number) {
            setErrorTel(true)
            state = true

        }else{
            setErrorTel(false)
        }
        
        if(mail === ""){
            setErrorEmail(true)
            state = true
        }else{
            setErrorEmail(false)
        }

        if(mail !== validateMail || validateMail === ""){
            setError(true)
            setValidateMail("")
            state = true

        } else if ((nombre ==="" || apellido ==="" || phone ==="" || mail  === "") || validateMail !== mail){
            state = true

        }  else {
            setError(false)
            state = false
        }

        return state;
    }

    const createOrder = (buyer) => {

        const order = {
            buyer: buyer,
            items: itemSelected,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(baseDeDatos, 'orders');



        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
        });
    }

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };
    const handleChangeMail = (event) => {
        setMail(event.target.value);
        
    };
    const handleChangeValidateMail = (event) => {
        setValidateMail(event.target.value);
    };





    useEffect(() => {
        const handleMouseMove = (e) => {
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {

            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    return (
        <div className=''>
            <form action="" onSubmit={handleSubmit} className='form'>
                <input 
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                    className={errorNombre ? "input-error" : "input-nombre"}
                />
        {errorNombre && <p className='message-error' >Debe ingresar un Nombre</p>}


                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                    className={errorApellido ? "input-error" : "input-apellido"}
                />
        {errorApellido && <p className='message-error' >Debe ingresar un Apellido</p>}

                <input
                type="text"
                placeholder="Telefono..."
                name="Phone"
                value={phone}
                onChange={handleChangePhone}
                className={errorTel ? "input-error" : "input-phone"}
                />
        {errorTel && <p className='message-error' >El numero de Telefono no es valido</p>} 
                
                <input
                    type="email"
                    placeholder="Ingrese su E-mail..."
                    name="Mail"
                    value={mail}
                    onChange={handleChangeMail}
                    className={errorEmail ? "input-error" : "input-email"}

                />
        {errorEmail && <p className='message-error' >Debe ingresar un E-mail</p>}

                <input
                    type="email"
                    placeholder="Repita su E-mail..."
                    name="Valid Mail"
                    value={validateMail}
                    onChange={handleChangeValidateMail}
                    style={{width: "55%"}}
                    className={error ? "input-error" : ""}
                />
        {error && <p className='message-error' >Los E-mails no coinciden</p>}

                <button className='btn-enviarform'>Enviar</button>
            </form>
        </div>
    );
};

export default Form;