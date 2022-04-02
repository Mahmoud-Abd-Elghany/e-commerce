import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './preview-item.style.scss'
import { addItemToCart } from '../../redux/cart/cart.actions'
import { IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useHistory } from 'react-router-dom'

const PreviewItem = ({item}) => {
    const {name, price, imageUrl} = item;
    const dispatch = useDispatch();
    const {user} = useSelector(state => state);
    let history = useHistory();
    const onClickHandler = (e) => {
        //Checking if user is logged in first before adding to Cart
        e.preventDefault();
        if(user.currentUser === null){
            history.push("/signin");
        }
        else{
            dispatch(addItemToCart(item));
        }
        
    }
    return (
        <div className = 'preview-item'>
            <div className = 'image' 
                 style = {{ backgroundImage: `url(${imageUrl})`}}
                 />
            <IconButton color="primary" aria-label="add to shopping cart" className='cart-icon' sx={{color: "black", borderRadius:"0px"}} onClick={(e) => onClickHandler(e)}>
                <AddShoppingCartIcon sx={{color: "black", height: "70%", width: "70%"}}/>
            </IconButton>
            <div className = 'image-footer'>
                <span className = 'name'>{name}</span>
                <span className = 'price'>${price}</span>
            </div>
            
        </div>
    )
}

export default PreviewItem
