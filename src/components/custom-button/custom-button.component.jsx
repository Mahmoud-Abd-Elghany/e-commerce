import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, isGoogleSignin, ...otherProps}) => {
    return (
        <div className ='button-container'>
            <button className={`${isGoogleSignin? 'google-button': ''} button` } {...otherProps}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
