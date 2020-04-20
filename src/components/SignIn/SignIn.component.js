import React, { useState } from 'react';

import './SignIn.styles.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

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

        setState({ [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
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

                <CustomButton type='submit'>
                    Sign In
                </CustomButton>
            </form>
        </div>
    )
}

export default SignIn;