
const mercadopago = require("mercadopago");

// // Agrega credenciales
mercadopago.configure({
  access_token: "TEST-6697630191900515-100216-5cee709f4f62fac9c1869b30d44a0290-115371331",
});


 // Crea un objeto de preferencia
let preference = {
  items: [ ],
};

const referencia = mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  });