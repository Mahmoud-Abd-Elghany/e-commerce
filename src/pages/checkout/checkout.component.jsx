import React, { useState } from 'react'
import './checkout.style.scss'
import { useSelector } from 'react-redux'
import { cartItemsSelector, cartItemsTotalPriceSelector } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { PayPalButtons } from '@paypal/react-paypal-js'

const CheckoutPage = () => {
    const cartItems = useSelector(state => cartItemsSelector(state))
    const totalPrice = useSelector(state => cartItemsTotalPriceSelector(state))
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const approveHandler = (order) => {
        //backend code to handle order request
        setPaidFor(true);
        //If response is error
        //setError("Transaction couln't be completed")
    }
    if(paidFor){
        alert("Transaction has been completed successfully")
    }
    if(error){
        alert("Error: ", error)
    }

    return (
        <div className="checkout-page">
            <div className='products-sec'>
                <div className="header">
                    <ul className="list">
                        <li>Product</li>
                        <li>Description</li>
                        <li>Quantity</li>
                        <li>Price</li>
                        <li>Remove</li>
                    </ul>
                </div>
                <div className="details">
                {
                    cartItems.map(item => <CheckoutItem key= {item.id} item={item}/>)
                }
                </div>
                <div className="total-section">
                    <span>Total: ${totalPrice}</span>
                </div>
            </div>
            <div className="paypal-Btn">
                <PayPalButtons
                    style={{
                        layout: 'vertical',
                        color:  'silver',
                        shape:  'rect',
                        label:  'pay',
                        tagline: false,
                        height: 45,
                    }}
                    createOrder= {(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: '9.99'
                                }
                            }]
                        })
                    }}
                    onApprove={(data, actions) => {
                    return actions.order.capture()
                        .then(order => console.log("onApprove Order: ", order))
                        .then( order => approveHandler(order))
                        .catch(error => console.log(error));
                    }}
                    onError = {(err) => {
                        setError(err);
                        console.log("Paypal error:", err);
                    }}
                    onClick = { () => {
                        //Checking if product is already bought
                    }}
                />
            </div>
        </div>
    )
}

export default CheckoutPage
