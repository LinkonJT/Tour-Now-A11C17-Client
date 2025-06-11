import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const provider = new GoogleAuthProvider();

/**Create user */
const createUser=(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

/**SignIN with email and password */
const signInUser=(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}


/**SignIn with Google */

const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
}

/**Sign Out */
const signOutUser=()=>{
    setLoading(true);
    return signOut(auth);
}


/***to set current user in FIrebase upon new login/logout(statechange) */
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoading(false);
})
return () => unsubscribe()},
[])


const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
}

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;