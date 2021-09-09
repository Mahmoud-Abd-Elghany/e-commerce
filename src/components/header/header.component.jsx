import React from 'react'
import { connect, useSelector } from 'react-redux'
import './header.style.scss'
import {ReactComponent as Logo} from './logo/balcony.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

const Header = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const cartHidden = useSelector(state => state.cart.hidden);
    console.log("currentUser:", currentUser);
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='header-text-container'>
                <Link to='/shop' className='header-text'>SHOP</Link>
                <Link to='/contact' className='header-text'>CONTACT</Link>
                {
                    currentUser?
                    <div className="signedIn-container">
                        <div className='header-text user'>
                            {currentUser.displayName}
                        </div>
                        <div className='header-text' onClick={() => auth.signOut()}>
                            sign out
                        </div>
                        <CartIcon/>
                    </div>
                    :
                    <Link to='/signin' className='header-text'>SIGN IN</Link>
                }
                
            </div>
            {
                cartHidden? 
                     null
                    : 
                    <CartDropdown/>
            }
            
        </div>
    )
}



export default Header
