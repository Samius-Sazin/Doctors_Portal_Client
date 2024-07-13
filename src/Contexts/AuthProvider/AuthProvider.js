import React, { createContext } from 'react'
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

    return (
        <AuthContext.Provider value={useFirebase()}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider
