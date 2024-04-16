import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth/cordova";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext(null)
// social auth provider 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    // console.log(loader);

    console.log(user);
    //Create User 
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Signin User
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleSignin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubSignin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logout = () => {
        setUser(null)
        signOut(auth)
        toast.success("Logout successful!");
    }

    //Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false)
        });
        return () => unsubscribe()
    }, [])
    const allValues = {
        name: "test",
        createUser,
        signInUser,
        googleSignin,
        githubSignin,
        logout,
        user,
        loader
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;