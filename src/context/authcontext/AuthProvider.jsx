import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import { signInWithCredential } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const signin = (email, password) => {
        signInWithCredential(auth, email, password);
    }

    const authInfo = {
        signin,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;