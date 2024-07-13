/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/RegisterLogin/Firebase/Firebase.Initialize";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [dashboardLoading, setDashboardLoading] = useState(false);
    const [token, setToken] = useState('');

    /* initialize firebase */
    initializeFirebase();
    /* Auth */
    const auth = getAuth();

    /*_____ Google authentication Starts ____ */
    const googleProvider = new GoogleAuthProvider();
    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    /*____ Google authentication Ends____*/

    /*____ Email Password Authentication Starts*/
    //register
    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    /*____ Email Password Authentication Ends____*/

    //Log out
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error);
        });
    }

    // user state observer/ update user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [])


    //send user data to DB
    const sendUserDataToDB = (userData, method) => {
        const updatedUserData = {
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL || "",
            phoneNumber: userData.phoneNumber || "",
        };

        fetch(`https://doctors-portal-server-wg85.onrender.com/users`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUserData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    //successfully insert userData to MongoDB database

                }
                else {
                    //Unsuccessfull
                }
            })
    }

    //check whether user has role for Admin or not
    useEffect(() => {
        setDashboardLoading(true);

        fetch(`https://doctors-portal-server-wg85.onrender.com/users/${user.email}`)
            .then(response => response.json())
            .then(data => {
                if (data.isAdmin) {
                    setIsAdmin(true);
                    setDashboardLoading(false);
                }
                else {
                    setIsAdmin(false);
                    setTimeout(() => {
                        setDashboardLoading(false);
                    }, 10000);
                }
            })
    }, [user.email, isAdmin])

    return {
        user,
        setUser,
        error,
        setError,
        signinWithGoogle,
        signupWithEmailAndPassword,
        loginWithEmailAndPassword,
        logout,
        isLoading,
        setIsLoading,
        sendUserDataToDB,
        isAdmin,
        dashboardLoading,
        token,
    }
}

export default useFirebase;