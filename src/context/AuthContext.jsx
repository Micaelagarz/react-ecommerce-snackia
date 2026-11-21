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
    const [initialLoading, setInitialLoading] = useState(true); 
    const [loading, setLoading] = useState(false); 

    const auth = getAuth(); // We obtain the auth instance only once
    const db = getFirestore(); // We initialize Firestore

    // Function to register a new user
   const signup = async (email, password) => {
    setLoading(true);
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        setLoading(false);
        throw error;
    }
};

const login = async (email, password) => {
    setLoading(true);
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        setLoading(false);
        throw error;
    }
};

const logout = async () => {
    setLoading(true);
    try {
        await signOut(auth);
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
           setLoading(true); // <--- AGREGAR ESTA LÍNEA
        try {
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
        } finally {
            setLoading(false);
            setInitialLoading(false); // <--- AGREGAR ESTA LÍNEA
        }
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
        {!initialLoading && children}
    </AuthContext.Provider>
);


}

export default AuthContext;