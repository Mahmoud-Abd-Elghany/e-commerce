import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './header.style.scss'
import {ReactComponent as Logo} from './logo/balcony.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { cartHiddenSelector } from '../../redux/cart/cart.selector'
import { currentUserSelector } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => currentUserSelector(state));
    const cartHidden = useSelector(state => cartHiddenSelector(state));
    console.log("Called Header");
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
                        <div className='header-text' onClick={() => dispatch(signOutStart())}>
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
