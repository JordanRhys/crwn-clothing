import React, { useState } from 'react';

import './SignIn.styles.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        setState({
            email: '',
            password: ''
        });
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    label='email'
                    type='email'
                    handleChange={handleChange}
                    value={state.email}
                    required
                />
                <FormInput
                    name='password'
                    label='password'
                    type='password'
                    handleChange={handleChange}
                    value={state.password}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign in
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;