import React from 'react'
import './signin.style.scss'
import SignIn from '../../components/signin-section/signin-section.component'
import SignUp from '../../components/signup-section/signup-section.component'

const SignInPage = () => {
    return (
        <div className='signin-page'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInPage
