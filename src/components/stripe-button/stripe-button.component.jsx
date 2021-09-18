import React from 'react'
import './stripe-button.style.scss'
import StripeCheckout from 'react-stripe-checkout'
import Logo from '../header/logo/balcony.svg'

function StripeButton({price}) {
    const priceInCent = price * 100;
    const publishableKey = 'pk_test_51JarS1KhUcUtTX5rypMCAa8HhwOTQwOJDYU1XdAwnE9Oe1WtzjPU9HTJG1bVd0leC5PqoYdhmoxYercqO4yaLAQg00QjHtx9Ai'
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }
    return (
            <StripeCheckout
                label = "Pay Now"
                name = "Peacock Clothing"
                billingAddress
                shippingAddress
                image = {Logo}
                description = {`Your Total is $${price}`}
                amount ={priceInCent}
                panelLabel= 'pay now'
                token = {onToken}
                stripeKey = {publishableKey}
                ComponentClass='div'
                className= "stripe-btn"
            >
            </StripeCheckout>
    )
}

export default StripeButton
