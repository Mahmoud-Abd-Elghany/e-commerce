import React from 'react'
import { connect, useSelector } from 'react-redux'
import './header.style.scss'
import {ReactComponent as Logo} from './logo/balcony.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

const Header = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
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
                    </div>
                    :
                    <Link to='/signin' className='header-text'>SIGN IN</Link>
                }
                
            </div>
        </div>
    )
}



export default Header
