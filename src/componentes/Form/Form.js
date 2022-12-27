import React, { useState, useEffect, useContext, useRef } from 'react';
import { addDoc, collection, doc, serverTimestamp, updateDoc, } from 'firebase/firestore';
import { baseDeDatos } from '../../FireBaseConfig';
import axios from 'axios'
import Directions from '../Directions/Directions';
import { CartContext } from '../../context/CartContext';
import PayPalCheckoutButton from '../PaypalCheckoutButton/PayPalCheckoutButton';
// import { clear } from '@testing-library/user-event/dist/clear';
import emailjs from 'emailjs-com';
import { directionList } from '../DirectionList/DirectionList';



// ANTES DE FINALIZAR CON EL FORM TENGO QUE ELEGIR ENTRE DOS LIBRERIAS DE EMAIL 
// ESTOY ENTRE NODEMAILER Y EMAIL JSON, DESINSTALAR ALGUNA 
const Form = ({ itemSelected, cart, idCompra, clearCart, handleId }) => {

    const form = useRef();
    const { finalPrice } = useContext(CartContext)
    const [dedicatoria, setDedicatoria] = useState('')
    const [saveDedicatoria, setSaveDedicatoria] = useState('')

    //    datos de quien recibe 
    // const [value, setValue] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [phone, setPhone] = useState('');
    const [mailComprador, setMailComprador] = useState('');

    const [calle, setCalle] = useState('');
    const [altura, setAltura] = useState('');
    const [piso, setPiso] = useState('');
    const [errorCalle, setErrorCalle] = useState(false);
    const [errorAltura, setErrorAltura] = useState(false);
    const [errorPiso, setErrorPiso] = useState(false);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorTel, setErrorTel] = useState(false);


    // datos comprador
    const [nombreComprador, setNombreComprador] = useState('')
    const [apellidoComprador, setApellidoComprador] = useState('')
    const [errorNombreComprador, setErrorNombreComprador] = useState(false)
    const [errorApellidoComprador, setErrorApellidoComprador] = useState(false)
    const [validateMail, setValidateMail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [error, setError] = useState(false);

    // DATO DE LA LOCACION
    const [errorLocation, setErrorLocation] = useState(false)
    const [locationSelect, setLocationSelect] = useState({})
    console.log("LOCATION SELECTED, ", locationSelect)


    // ITEM PARA EL EMAIL 
    console.log("itemSelected",  itemSelected)


    let newItemForEmail = itemSelected.reduce(function(a,b){
        return `${a} ID: ${b.id}` + 
        ` CANTIDAD: ${b.cantidad} ` + 
        ` PRECIO: $${b.precioUnidad},` + 
        ` TAMAÑO: ${b.tamaño} ` + 
        ` NOMBRE PRODUCTO: ${b.description}, ` +  
        ` ESTILO: ${b.tipo}`
    
    }, "")
    console.log("newItemForEmail", newItemForEmail)


    const itemToEmail = Object.assign({}, itemSelected)
    console.log("itemToEmail",itemToEmail)


   const itemsInString = JSON.stringify(newItemForEmail)
    console.log("itemsInString",  itemsInString)
    



    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validation()) {
                const buyer = {
                    itemsInString: itemsInString,
                    nombre: nombre,
                    apellido: apellido,
                    phone: phone,
                    mailComprador: mailComprador,
                    localidad: locationSelect,
                    calle: calle,
                    altura: altura,
                    piso: piso,
                    dedicatoria: saveDedicatoria,
                    nombreComprador: nombreComprador,
                    apellidoComprador: apellidoComprador,
                    finalPrice: finalPrice,
                    

                };
            createOrder(buyer)

        emailjs.send('service_8spcdzk', 'template_xz119jg', buyer,  'ngfwjTyhJoJB1D_eY')
            .then((result) => {
                    console.log("FUNCIONO LO DE EMAIL", result.text);
                }, (error) => {
                    console.log("NO FUNCIONO", error.text);
                });

        }

        let bodyMp = itemSelected.map((item) => {
            let body = {
                title: item.nombreProducto,
                description: item.descr,
                picture_url: item.img,
                category_id: item.tipo,
                quantity: item.cantidad,
                unit_price: finalPrice
            }

            return body
        })

        console.log(bodyMp, "BODY MP")

        const opts = {
            method: "POST",
            data: {
                bodyMp,
                nombre,
                apellido,
                phone,
                mailComprador,
                calle,
                altura,
                piso,
                saveDedicatoria,
                finalPrice
            },
            

            // debo ahora subir la pagina de backend a vercel y agregar el link aca
            url: "https://mp-envioflores.vercel.app/"
            // url: "http://localhost:4000/payment"
        }

        console.log( "OPTS", opts)


        axios(opts)
            .then(res => {
                const linkMp = res.data.init_point
                console.log("res data", res.data.init_point)
                window.location.href = linkMp

            })
    };

    const validation = () => {
        let state;

    if (nombre === "") {
            setErrorNombre(true)
            state = true
        } else {
            setErrorNombre(false)
        }

    if (apellido === "") {
            setErrorApellido(true)
            state = true
        } else {
            setErrorApellido(false)
        }

    if (calle === "") {
            setErrorCalle(true)
            state = true
        } else {
            setErrorCalle(false)
        }

    if (piso === "") {
            setErrorPiso(true)
            state = true
        } else {
            setErrorPiso(false)
        }

    if (altura === "") {
            setErrorAltura(true)
            state = true
        } else {
            setErrorAltura(false)
        }


    if (phone === "" || phone.length <= 4) {
            setErrorTel(true)
            state = true
        } else {
            setErrorTel(false)
        }

    if (mailComprador === "") {
            setErrorEmail(true)
            state = true
        } else {
            setErrorEmail(false)
        }

    if (nombreComprador === "") {
            setErrorNombreComprador(true)
            state = true
        } else {
            setErrorNombreComprador(false)
        }
    if (apellidoComprador === "") {
            setErrorApellidoComprador(true)
            state = true
        } else {
            setErrorApellidoComprador(false)
        }

    if (mailComprador !== validateMail || validateMail === "") {
            setError(true)
            setValidateMail("")
            state = true
        } else if ((nombre === "" || apellido === "" || phone === "" || mailComprador === "" || calle === "") || validateMail !== mailComprador) {
            state = true
        }
        else {
            setError(false)
            state = false
        }

    if (finalPrice === 0) {
            setErrorLocation(true)
            state = true
        } else {
            setErrorLocation(false)
        }

        return state;
    }

    const createOrder = (buyer) => {
        const order = {
            buyer: buyer,
            items: itemSelected,
            finalPrice: finalPrice,
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
    const handleChangeCalle = (event) => {
        setCalle(event.target.value);

    };
    const handleChangeMail = (event) => {
        setMailComprador(event.target.value);

    };
    const handleChangeAltura = (event) => {
        setAltura(event.target.value);

    };
    const handleChangePiso = (event) => {
        setPiso(event.target.value);

    };
    const handleChangeValidateMail = (event) => {
        setValidateMail(event.target.value);
    };


    const handleChangeNombreComprador = (event) => {
        setNombreComprador(event.target.value);

    };
    const handleChangeApellidoComprador = (event) => {
        setApellidoComprador(event.target.value);

    };

    const handleChangeDedicatoria = (event) => {
        console.log(event.target.value)
        setDedicatoria(event.target.value)
    };


    const handleChangeBtn = (e) => {
        e.preventDefault()
        setSaveDedicatoria(dedicatoria)
        setDedicatoria("")

    }


    console.log("Dedicatoria guardada", saveDedicatoria)

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
            <form ref={form} onSubmit={handleSubmit} className='form'>

                <div className='datos-recibe'>

                    <p>Gracias por confiar en Envio Flores, antes de finalizar, debe completar todos los datos requeridos aqui abajo...</p>

                    <h3 className='titulo-datosEnvio'>Datos de quien Recibe:</h3>
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
                        name="phone"
                        value={phone}
                        onChange={handleChangePhone}
                        className={errorTel ? "input-error" : "input-phone"}
                    />
                    {errorTel && <p className='message-error' >El numero de Telefono no es valido</p>}


                    <Directions 
                     setLocationSelect={setLocationSelect}
                     className={finalPrice === 0 ? 'input-error' : ""} 
                     />

                        {errorLocation && <p className='message-error' >Tiene que elegir una LOCALIDAD</p>}

                    <input
                        type="text"
                        placeholder="Calle..."
                        name="calle"
                        value={calle}
                        onChange={handleChangeCalle}
                        className={errorCalle ? "input-error" : "input-calle"}
                    />
                    {errorCalle && <p className='message-error' >La Calle no es valida</p>}

                    <input
                        type="text"
                        placeholder="Altura..."
                        name="altura"
                        value={altura}
                        onChange={handleChangeAltura}
                        className={errorAltura ? "input-error" : "input-altura"}
                    />
                    {errorAltura && <p className='message-error' >La Altura no es valida</p>}

                    <input
                        type="text"
                        placeholder="Piso..."
                        name="piso"
                        value={piso}
                        onChange={handleChangePiso}
                        className={errorPiso ? "input-error" : "input-piso"}
                    />
                    {errorPiso && <p className='message-error' >El piso no es valida</p>}

                    <div className='div-dedicatoria' >


                        <h4 className='dedic-text'>Aqui puede agregar una dedicatoria:</h4>
                        <textarea className='dedicatoria' name="saveDedicatoria" onChange={handleChangeDedicatoria} value={dedicatoria} />
                        <button className='btn-dedicatoria' onClick={handleChangeBtn}>Guardar Dedicatoria</button>

                        {
                            saveDedicatoria ? (
                                <>
                                    <h4 className='dedic-titulo'>Usted escribió:</h4>
                                    <h3 className='dedic-save'>{saveDedicatoria}</h3>

                                </>
                            ) : saveDedicatoria === ""
                        }
                    </div>


                </div>

                <div className='datos-comprador'>

                    <h3 className='titulo-datosEnvio'>Datos de quien Envia:</h3>
                    <input
                        type="text"
                        placeholder="Nombre de comprador..."
                        name="nombreComprador"
                        value={nombreComprador}
                        onChange={handleChangeNombreComprador}
                        className={errorNombreComprador ? "input-error" : "input-nombreComprador"}
                    />
                    {errorNombreComprador && <p className='message-error' >Debe ingresar su Nombre </p>}


                    <input
                        type="text"
                        placeholder="Apellido de comprador..."
                        name="apellidoComprador"
                        value={apellidoComprador}
                        onChange={handleChangeApellidoComprador}
                        className={errorApellidoComprador ? "input-error" : "input-apellidoComprador"}
                    />
                    {errorApellidoComprador && <p className='message-error' >Debe ingresar su Apellido</p>}

                    <input
                        type="email"
                        placeholder="Ingrese su E-mail..."
                        name="mailComprador"
                        value={mailComprador}
                        onChange={handleChangeMail}
                        className={errorEmail ? "input-error" : "input-email"}

                    />
                    {errorEmail && <p className='message-error' >Debe ingresar un E-mail</p>}

                    <input
                        type="email"
                        placeholder="Repita su E-mail..."
                        name="validateMail"
                        value={validateMail}
                        onChange={handleChangeValidateMail}
                        style={{ width: "55%" }}
                        className={error ? "input-error" : ""}
                    />
                    {error && <p className='message-error' >Los E-mails no coinciden</p>}

                </div>

                <h2 className='totalPrecio'  >Total final: ${finalPrice}</h2>

                {
                    finalPrice !== 0 ? (

                        <div className='payments-btn-container'>

                            <h3 className='metodo-pago-title'>Seleccione un metodo de pago</h3>

                            <div className='mercadopago-div'>
                                <p className='tarjetas'>Tarjeta Nacionales</p>
                                <button className='btn-mercadopago' onClick={handleSubmit}>Pagar con Mercado pago
                                    <img src={'../assets/mp-icon.png'} className="mp-icon" alt="" />


                                </button>
                            </div>

                            <div className='paypal-div'>
                                <p className='tarjetas'>Tarjetas Internacionales</p>
                                <PayPalCheckoutButton
                                    itemSelected={itemSelected}
                                    finalPrice={finalPrice}
                                    handleSubmit={handleSubmit}
                                    handleId={handleId}
                                    createOrder={createOrder}
                                    validation={validation}
                                    clearCart={clearCart}
                                />
                            </div>

                        </div>
                    ) : <h1 className='alert-finalprice'> Antes de Finalizar la compra, debe elegir una Localidad de envio.</h1>
                }

            </form>
        </div>
    );
};

export default Form;