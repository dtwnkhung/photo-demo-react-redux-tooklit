import React, { Fragment } from "react";
import { Container } from "reactstrap";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/photos',
    // callbacks: {
    //     // Avoid redirects after sign-in.
    //     signInSuccessWithAuthResult: () => false,
    // },
};


function SignIn() {
    return (
        <Fragment>
            <Container>
                <div className="py-4">
                    <h1 className="text-center">Login form</h1>
                    <p className="text-center">or login with social account</p>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            </Container>
        </Fragment>
    );
}

export default SignIn;