import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, GithubAuthProvider, sendPasswordResetEmail, sendEmailVerification,  } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider;
const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  

  //sign in with google account
  const googleSignIn =() =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //sign in with google account
  const gitSignIn =() =>{
    setLoading(true)
    return signInWithPopup(auth, gitProvider)
  }

 //create user account with email and password  or sign up
  const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in with existing email and password
  const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logout user 
  const logOut = () =>{
    setLoading(false)
    return signOut(auth)
  }

  //update user name / profile 
  const updateUserName = (name,url) =>{
    return updateProfile(auth.currentUser, {displayName:name, photoURL:url})
  }

  //password reset
  const passwordResetEmail =(email)=>{
    return sendPasswordResetEmail(auth, email)
  }

  //email verification
  const emailVerification = () =>{
    return sendEmailVerification(user)
  }
  // user observer for state change 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return () => unsubscribe()
  }, 
  [])
  


  
  const  authInfo = {user, loading, googleSignIn, gitSignIn, createUser, signIn, logOut, updateUserName}

    return (
        <AuthContext.Provider value={authInfo}>

                {children}

        </AuthContext.Provider>
    );
};

export default UserContext;