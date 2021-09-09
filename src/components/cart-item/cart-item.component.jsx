import React from 'react'
import "./cart-item.style.scss"
import { useSelector } from 'react-redux'
import {ReactComponent as RemoveIcon} from "./remove.svg"

const CartItem = ({item: {name, price, imageUrl, quantity}}) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <div className="cart-item-container">
            <img className="img" alt="" src={imageUrl}/>
            <div className="item-details">
                <div className="name">{name}</div>
                <div className="price">{quantity} X ${price}</div>
            </div>
            <RemoveIcon className="remove-icon"/>

        </div>
    )
}

export default CartItem
