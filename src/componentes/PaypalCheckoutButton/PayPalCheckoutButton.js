import React, { useEffect, useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PayPalCheckoutButton = ( { itemSelected, finalPrice, handleSubmit, handleId, createOrder, validation, clearCart }) => {
    
    const [paidFor, setPaidFor] = useState(false);

    const [orderId, setOrderId] = useState()
    const [error, setError] = useState(null);

    
    const dolarPrice = 163.18
    const conversionToDolar = finalPrice / dolarPrice
    console.log("PRECIO FINAL EN DOLARES", conversionToDolar)
    console.log("PRECIO FINAL EN DOLARES", conversionToDolar.toFixed())

    const priceFinalDolar = conversionToDolar.toFixed()
    console.log("FINAL PRICE DOLAR", priceFinalDolar)

    const handleApprove = (orderID) => {
//       // Call backend function to fulfill order
  
//       // if response is success
      setPaidFor(true);
      setOrderId(orderID)
//       // Refresh user's account or subscription status
  
//       // if response is error
//       // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
    };
    console.log("Paid", paidFor)
    console.log("ORDER ID", orderId)
  
    useEffect(()=>{
        
        if (paidFor) {
          // Display success message, modal or redirect user to success page
        handleId(orderId)
        // handleSubmit()
        // createOrder()
        validation()
        clearCart()  
        }

    },[paidFor])

   
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
     createOrder={(data, actions) => {

        console.log("data", data)
        console.log(" create order", actions.order)
        return actions.order.create({
            purchase_units: [
                    {
                        
                        
                    description: itemSelected.description,
                    amount: {
                        value: priceFinalDolar ,    
                            item_total: {     
                                itemSelected
                        }
                    }       
                }
            ]
        });
    }}
        onApprove={async (data, actions) => {
            const order = await actions.order.capture(); 
            console.log("order onApprove", order);
            console.log("AWAIT", actions.order)
            console.log("data approve", data)

          
            handleApprove(data.orderID);
          }}
          onError={(err) => {
            setError(err);
            console.error("PayPal Checkout onError", err);
          }}
    />
);
};


export default PayPalCheckoutButton