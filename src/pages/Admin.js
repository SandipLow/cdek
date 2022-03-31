import React, {useState, useEffect, useContext } from 'react'
import Banner from '../Components/banner/banner'
import AuthContext from "../Context/auth/AuthContext"

export default function Admin() {

    const [loadingAuthData, setLoadingAuthData] = useState(false);
    const Context = useContext(AuthContext)

    // Loading Auth Data
    useEffect(() => {
        if(Context.user){
            console.log("user is there");
        }
        setLoadingAuthData(false)

        // eslint-disable-next-line
    }, [])
    
    // Log In.....
    function handleSubmit(event) {
        event.preventDefault();

        const form = document.getElementById('login');

        Context.signIn(form.email.value, form.password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user)
            Context.setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode," ", errorMessage)
        });

    }


    // Rendering.....
    if (loadingAuthData) {
        return (
            <Banner title="Loading Auth data..."/>
        )
    } 
    
    else {
        if (Context.user) {
            return (
                <>
                <Banner title= {`logged in as ${Context.user.email}`} />
                <button onClick={Context.signOut}>Sign Out</button>
                </>
            )
        }

        else {
            return (
                <>
                <Banner title="You need to sign in first..!"/>
                <form id='login' onSubmit={handleSubmit}>
                    <span>Enter email :</span>
                    <input type="email" name="email"></input><br/>
                    <span>Enter password :</span>
                    <input type="password" name="password"></input><br/>
                    <button type="submit">Submit</button>
                </form>
                </>
            )
        }
    }

}
