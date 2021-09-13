import React from 'react'
import './checkout-item.style.scss'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cart/cart.actions'
import {ReactComponent as RemoveIcon} from "../cart-item/remove.svg"

const CheckoutItem = ({item: {name, price, imageUrl, quantity, id}}) => {
    const dispatch = useDispatch();
    const dispatchRemoveItem = () => dispatch(removeItem(id));
    return (
        <div className='checkout-item-container'>
            <div className="element-container">
            <img src={imageUrl} alt=""/>
            </div>
            <div className="element-container">
                <span>{name}</span>
            </div>
            <div className="element-container">
                <span>{quantity}</span>
            </div>
            <div className="element-container">
                <span>${price}</span>
            </div>
            <div className="element-container">
                <RemoveIcon className="remove-icon" onClick={dispatchRemoveItem}/>
            </div>
        </div>
    )
}

export default CheckoutItem
