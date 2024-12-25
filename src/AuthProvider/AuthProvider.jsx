import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext()

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    // email update
    const [email, setEmail] = useState("")

    const [user, setUser] = useState(null)
    console.log(user);

    const [loading, setLoading] = useState(true)

    // register
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update user profile
    const updateUSerProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // google login
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        email,
        setEmail,
        user,
        setUser,
        handleRegister,
        handleLogin,
        logOut,
        updateUSerProfile,
        handleGoogleLogin,
        loading,
    }

    // step 3
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
            setUser(currectUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;