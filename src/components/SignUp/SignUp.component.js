import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import {SignUpContainer, TitleText} from './SignUp.styles';

const SignUp = () => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { value, name } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = async event => {
        const { displayName, email, password, confirmPassword } = state;
        console.log(password + '' + confirmPassword);
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error);
        }
    }

    const { displayName, email, password, confirmPassword } = state;
    return (
        <SignUpContainer>
            <TitleText>I do not have an account</TitleText>
            <span>Sign up with your email address</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email Address'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;