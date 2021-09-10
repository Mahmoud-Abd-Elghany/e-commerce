import React from 'react'
import "./cart-item.style.scss"
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cart/cart.actions'
import {ReactComponent as RemoveIcon} from "./remove.svg"

const CartItem = ({item: {name, price, imageUrl, quantity, id}}) => {
    const dispatch = useDispatch();
    const dispatchRemoveItem = () => dispatch(removeItem(id));
    return (
        <div className="cart-item-container">
            <img className="img" alt="" src={imageUrl}/>
            <div className="item-details">
                <div className="name">{name}</div>
                <div className="price">{quantity} X ${price}</div>
            </div>
            <RemoveIcon className="remove-icon" onClick={dispatchRemoveItem}/>
        </div>
    )
}

export default CartItem
