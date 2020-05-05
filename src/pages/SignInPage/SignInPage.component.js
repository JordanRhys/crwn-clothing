import React from 'react';

import {SignInPageContainer} from './SignInPage.styles';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

const SignInPage = () => {

    return (
        <SignInPageContainer>
            <SignIn/>
            <SignUp/>
        </SignInPageContainer>
    )
}

export default SignInPage;