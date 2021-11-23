import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { signUpStart } from '../../redux/user/user.actions';
import './signup-section.style.scss'

const SignUp = () =>{
    const [signUpCredentials, setSignUpCredentials] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setSignUpCredentials({ ...signUpCredentials, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const {password, confirmPassword} = signUpCredentials;
        dispatch(signUpStart(signUpCredentials));
        if(confirmPassword === password){

            setSignUpCredentials({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        else{ 
            alert("password doesn't match");
            setSignUpCredentials({
                password: '',
                confirmPassword: ''
            });
            return;
        }
    }

    return (
        <div className = 'signup'>
            <h3>Don't have an Account?</h3>
            <h2>Sign Up</h2>

            <form className='signup-form' onSubmit={submitHandler}>
                <FormInput  name='displayName' 
                    label = 'Display Name:'
                    type='text' 
                    value= {signUpCredentials.displayName}
                    changeHandler= {changeHandler}
                    required
                />
                <FormInput  name='email' 
                    label = 'Email:'
                    type='email' 
                    value= {signUpCredentials.email}
                    changeHandler= {changeHandler}
                    required
                />
                <FormInput  name='password' 
                    label = 'Password:'
                    type='password' 
                    value= {signUpCredentials.password}
                    changeHandler= {changeHandler}
                    required
                />
                <FormInput  name='confirmPassword' 
                    label = 'confirmPassword:'
                    type='password' 
                    value= {signUpCredentials.confirmPassword}
                    changeHandler= {changeHandler}
                    required
                />

                <CustomButton className="button" name='Sign In' value='Submit Form' type='submit'>
                    Sign Up
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUp