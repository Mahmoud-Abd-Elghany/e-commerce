import React from 'react'
import { useDispatch } from 'react-redux'
import './preview-item.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import { addItemToCart } from '../../redux/cart/cart.actions'

const PreviewItem = ({item}) => {
    const {name, price, imageUrl} = item;
    const dispatch = useDispatch();
    return (
        <div className = 'preview-item'>
            <div className = 'image' 
                 style = {{ backgroundImage: `url(${imageUrl})`}}
                 />
            <div className = 'image-footer'>
                <span className = 'name'>{name}</span>
                <span className = 'price'>{price}</span>
            </div>
            <CustomButton inverted onClick = {() => dispatch(addItemToCart(item))} >Add to Cart</CustomButton>
        </div>
    )
}

export default PreviewItem
