import AuthContext from "./AuthContext";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";

export default function AuthState(props) {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    // Auth State check:
    useEffect(() => {
        onAuthStateChanged(auth, (usr)=>{
            if(usr) {
                setUser(usr)
            }
        })
    }, [user, auth])

    // Sign In :
    const signIn = async (email, password)=>{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user)
        return userCredential;
    }

    // Sign Out :
    const signOut = async ()=> {
        auth.signOut();
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user:user, setUser: setUser, signOut: signOut, signIn: signIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}
