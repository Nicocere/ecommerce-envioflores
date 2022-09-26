import React, { useState, useEffect } from 'react';
import {addDoc, collection, doc, serverTimestamp, updateDoc,} from 'firebase/firestore';
import { baseDeDatos } from '../../FireBaseConfig';



//const [datosorm, setDatosForm] = useState(initialState);
const Form = ({ itemSelected, cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [validateMail, setValidateMail] = useState('')
    //const [x, setX] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target.elements.nombre.value);
        //console.log(event.target.elements.apellido.value);
        //console.dir(event.target);
        //console.log(nombre, apellido, talle); //enviar la info a la base de datos
        //setNombre('');
                const order = {
            buyer: { nombre: nombre, apellido: apellido, phone: phone, mail: mail},
            items: itemSelected,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(baseDeDatos, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateprod();
        });
    };

    // const handleChange = () => {
    //     //name y value de cada input
    // }
    const updateprod = () => {
        const orderDoc = doc(baseDeDatos, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        //console.log(event.target.value);
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

    if (mail !== validateMail) {
        <h3>debe ingresar el mismo mail</h3>
    
    }


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
                    type="mail"
                    placeholder="Ingrese su Mail..."
                    name="Mail"
                    value={mail}
                    onChange={handleChangeMail}
                />
                <input
                    type="mail"
                    placeholder="Repita su Mail..."
                    name="Valid Mail"
                    value={validateMail}
                    onChange={handleChangeValidateMail}
                />

                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;