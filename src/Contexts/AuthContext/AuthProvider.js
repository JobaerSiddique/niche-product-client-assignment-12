import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)
  
    const createUser =(email,password)=>{
   setLoading(true)
    return  createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }
   const googleProvider = new GoogleAuthProvider();
   const googleLog = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }

   const updateUser=(userInfo)=>{
   
    return updateProfile(auth.currentUser,userInfo)
   }
   useEffect(()=>{
    const unscribe= onAuthStateChanged(auth,currentUser=>{
       console.log('user observing')
       setUser(currentUser)
       setLoading(false)
     })
     return ()=> unscribe();
  },[])

    const authInfo ={
        user,
        loading,    
        createUser,
        googleLog,
        updateUser,
            login,
            logOut
    }
    return (
        
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;