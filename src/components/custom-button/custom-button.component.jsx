import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, isGoogleSignin, inverted, ...otherProps}) => {
    return (
        <div className ='button-container'>
            <button className = {`${isGoogleSignin? 'google-button': ''}  ${inverted? 'inverted': ''} button` } 
            {...otherProps}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
