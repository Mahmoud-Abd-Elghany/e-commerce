import React from 'react'
import './checkout.style.scss'
import { useSelector } from 'react-redux'
import { cartItemsSelector, cartItemsTotalPriceSelector } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = () => {
    const cartItems = useSelector(state => cartItemsSelector(state))
    const totalPrice = useSelector(state => cartItemsTotalPriceSelector(state))
    return (
        <div className="checkout-page">
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
    )
}

export default CheckoutPage
