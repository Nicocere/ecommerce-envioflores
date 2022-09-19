import React, { useState, useEffect } from 'react';
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import { baseDeDatos } from '../../FireBaseConfig';

const Form = () => {

    //const [datosorm, setDatosForm] = useState(initialState);
const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [talle, setTalle] = useState('');
    //const [x, setX] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target.elements.nombre.value);
        //console.log(event.target.elements.apellido.value);
        //console.dir(event.target);
        //console.log(nombre, apellido, talle); //enviar la info a la base de datos
        //setNombre('');
        const order = {
            buyer: { nombre: nombre, apellido: apellido },
            items: cart,
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

    const handleChangeTalle = (e) => {
        setTalle(e.target.value);
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
                <select value={talle} onChange={handleChangeTalle}>
                    <option value="Large">L</option>
                    <option value="Medium">M</option>
                    <option value="Small">S</option>
                </select>
                <button>Enviar</button>
            </form>
        </div>
    );
};
}
export default Form;