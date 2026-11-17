import { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";


//1. Create the context
export const AuthContext = createContext();

//2. Custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

//3. Create the context provider
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(); // We obtain the auth instance only once
    const db = getFirestore(); // We initialize Firestore

    // Function to register a new user
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to log in
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Function to log out
    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists() && userDocSnap.data().rol === 'admin') {
                    setUser({ ...currentUser, rol: 'admin' });
                } else {
                    setUser({ ...currentUser, rol: 'user' });
                }
            } else {
                setUser(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth, db]);

    const value = {
        user,
        loading,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );


}

export default AuthContext;