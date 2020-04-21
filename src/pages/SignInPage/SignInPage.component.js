import React from 'react';

import './SignInPage.styles.scss';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

const SignInPage = () => {

    return (
        <div className='sign-in-page'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInPage;