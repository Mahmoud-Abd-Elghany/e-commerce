import React from 'react'
import './header.style.scss'
import {ReactComponent as Logo} from './logo/balcony.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='header-text-container'>
                <Link to='/shop' className='header-text'>SHOP</Link>
                <Link className='header-text'>CONTACT</Link>
                <Link className='header-text'>SIGN IN</Link>
            </div>
        </div>
    )
}

export default Header
