import React from 'react'
import { Button } from '@mui/material'
import './custom-button.style.scss'
import GoogleIcon from '@mui/icons-material/Google';

const CustomButton = ({children, isGoogleSignin, inverted, ...otherProps}) => {
    //className = {`${isGoogleSignin? 'google-button': ''}  ${inverted? 'inverted': ''} button` }
    return (
        <div> 
        {isGoogleSignin?
            <Button   variant="contained" className="custom-Btn google-Btn"  {...otherProps}>
                <span className='google-icon'><GoogleIcon/></span> <span>Sign In with Google</span>
            </Button>
            :
            <Button  className="custom-Btn" variant="outlined"
            {...otherProps}>
                {children}
            </Button>
            }
        </div>
    )
}

export default CustomButton
