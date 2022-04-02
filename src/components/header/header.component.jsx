import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './header.style.scss'
import {ReactComponent as Logo} from './logo/balcony.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { Link } from 'react-router-dom'
import { cartHiddenSelector } from '../../redux/cart/cart.selector'
import { currentUserSelector } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => currentUserSelector(state));
    const cartHidden = useSelector(state => cartHiddenSelector(state));
    const [navbar, setNavbar] = useState(false);
    const scrollHandler = () => {
        if(window.scrollY > 100){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', scrollHandler)
    return (
        <>
            
            <div className={navbar?'header active' : 'header'}>
            <div className={navbar?'header-text-container active' : 'header-text-container'}>
                <Link to='/' className='header-text'>Home</Link>
                <Link to='/shop' className='header-text'>SHOP</Link>
                {
                    currentUser?
                    <>
                        <div className='header-text user'>
                            {currentUser.displayName}
                        </div>
                        <div className='header-text' onClick={() => dispatch(signOutStart())}>
                            sign out
                        </div>
                        <CartIcon/>
                    </>
                        
                    :
                    <>
                        <Link to='/signup' className='header-text'>Register</Link>
                        <Link to='/signin' className='header-text'>sign in</Link>
                    </>
                }
                {
                    cartHidden?
                    null
                    : 
                    <CartDropdown/>
                }
            </div>
        </div>
        </>
    )
}



export default Header
