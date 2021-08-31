import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin-section.style.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [signInCredentials, setSignInCredentials] = useState({
        email: '',
        password: ''
    });

    const onChangehandler = (e) => {
        setSignInCredentials({...signInCredentials, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setSignInCredentials({
            email: '',
            password: ''
        });
    }
    return (
        <div className = 'signin'>
            <h3>Already have an Account?</h3>
            <h2>Sign In</h2>

            <form onSubmit={() => submitHandler}>
                <FormInput  name='email' 
                        label = 'Email:'
                        type='email' 
                        value= {signInCredentials.email}
                        changeHandler= {onChangehandler}
                        required
                    />
                <FormInput  name='password' 
                        label = 'Password:'
                        type='password' 
                        value= {signInCredentials.password}
                        changeHandler= {onChangehandler}
                        required
                    />
                    <div className="button-section">
                        <CustomButton name='Sign In' value='Submit Form' type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton name='Sign In With Google' value='Submit Form' onClick = {signInWithGoogle} isGoogleSignin ={true}>
                            Sign In With Google
                        </CustomButton> 
                    </div>
                
            </form>
        </div>
    )
}

export default SignIn
