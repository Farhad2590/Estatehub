import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)
// social auth provider 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    console.log(user);
    //Create User 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Signin User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubSignin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    //Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])
    const allValues = {
        name: "test",
        createUser,
        signInUser,
        googleSignin,
        githubSignin
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;