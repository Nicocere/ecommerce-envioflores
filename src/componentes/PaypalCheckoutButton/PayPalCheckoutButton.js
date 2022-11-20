import React, { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PayPalCheckoutButton = ( { itemSelected, finalPrice }) => {

    // LLAMAR A const {finalPrice} = useContext(CartContext) Y IMPORTARLO
    
//     const [paidFor, setPaidFor] = useState(false);
//     const [error, setError] = useState(null);

//     const handleApprove = (orderId) => {
//       // Call backend function to fulfill order
  
//       // if response is success
//       setPaidFor(true);
//       // Refresh user's account or subscription status
  
//       // if response is error
//       // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
//     };
  
//     if (paidFor) {
//       // Display success message, modal or redirect user to success page
//       alert("Thank you for your purchase!");
//     }

   
// if (error) {
//   // Display error message, modal or redirect user to error page
//   alert(error);
// }

    console.log("itemSelected", itemSelected)
    console.log("final price", finalPrice)

    return (
    <PayPalButtons style={{
        color: "gold",
        layout: "vertical",
        shape: "pill",
    }}
    //  createOrder={(data, actions) => {

    //     console.log("data", data)
    //     console.log("order", actions)
    //     return actions.order.create({
    //         purchase_units: [
    //             {
                    
    //             description: itemSelected.description,
    //             amount: {
    //                 value: finalPrice
    //             }
                        
                                
    //         }]

    //         });
    //     }}
    //     onApprove={async (data, actions) => {
    //         const order = await actions.order.capture(); 
    //         console.log("order", order);
          
    //         handleApprove(data.orderID);
    //       }}
    //       onError={(err) => {
    //         setError(err);
    //         console.error("PayPal Checkout onError", err);
    //       }}
    />
);
};


export default PayPalCheckoutButton