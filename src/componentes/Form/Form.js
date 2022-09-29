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
    const [error, setError] = useState(false)
    
    const handleSubmit = (event) => {
         event.preventDefault();

        if(!validation()){
            const buyer = { nombre: nombre, apellido: apellido, phone: phone, mail: mail};
            createOrder(buyer)
        }
    };

    const validation = () => {
        let state;
        if(mail !== validateMail){
            setError(true)
            setValidateMail("")
            state = true
        } else {
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
        console.log(event.target.value);
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
            //setX(e.clientX);
        };
        window.addEventListener('mousemove', handleMouseMove);
        //console.log('Creo evento');
        return () => {
            //siempre antes
            //clearInterval()
            window.removeEventListener('mousemove', handleMouseMove);
            //console.log('Borro evento');
        };
    });

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                <input
                type="text"
                placeholder="Telefono..."
                name="Phone"
                value={phone}
                onChange={handleChangePhone}
                />
                <input
                    type="email"
                    placeholder="Ingrese su Mail..."
                    name="Mail"
                    value={mail}
                    onChange={handleChangeMail}
                />
                <input
                    type="email"
                    placeholder="Repita su Mail..."
                    name="Valid Mail"
                    value={validateMail}
                    onChange={handleChangeValidateMail}
                    className={error ? "input-error" : ""}
                />
                {error && <p className='message-error' >Los mails no coinciden</p>}

                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;