import React from 'react'
import "./cart-item.style.scss"
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cart/cart.actions'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <IconButton aria-label="delete" size="large" onClick={dispatchRemoveItem} sx={{width:"fit-content", height:"fit-content"}} className="remove-icon">
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}

export default CartItem
