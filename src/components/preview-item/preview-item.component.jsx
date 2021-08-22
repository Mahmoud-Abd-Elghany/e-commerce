import React from 'react'
import './preview-item.style.scss'

const PreviewItem = ({name, price, imageUrl}) => {
    return (
        <div className = 'preview-item'>
            <div 
                className = 'image' 
                style = {{ backgroundImage: `url(${imageUrl})`}}

                />
            <div className = 'image-footer'>
                <span className = 'name'>{name}</span>
                <span className = 'price'>{price}</span>
            </div>
        </div>
    )
}

export default PreviewItem
