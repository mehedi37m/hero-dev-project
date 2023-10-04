import React, { Children, createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.config';


export const AuthContext = createContext(null);



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

 const googleSighIn = (value) => {
    console.log('first',value)
    return signInWithPopup(auth, googleProvider);
 }

 const AuthInfo = {
    googleSighIn,
 }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;