import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading, setLoading] = useState(true)

const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}


const signInUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

useEffect(() => {
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log('hello', currentUser)
    })
    return () => {
        unSubscribe(); 

    }
},[])





const authInfo = {
   user,
   signInWithGoogle,
   createUser,
   signInUser,
   logOut,
   loading,
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;