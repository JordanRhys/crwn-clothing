import React, { useState } from 'react';

import {SignInContainer, TitleText, ButtonsContainer} from './SignIn.styles';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setState({
                email: '',
                password: ''
            });

        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <SignInContainer>
            <TitleText>I already have an account</TitleText>
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
                <ButtonsContainer>
                    <CustomButton type='submit'>
                        Sign in
                    </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn;