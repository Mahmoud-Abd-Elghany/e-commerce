import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component';

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

                <input type='submit' value='Submit Form'/>
            </form>
        </div>
    )
}

export default SignIn
