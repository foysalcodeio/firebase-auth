import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [user, setUser] = useState(null);



    //SignIn function by firebase
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
        .then((result)=>{
            console.log(result);
            setUser(null)

        })
        .catch((error)=>{
            console.log('error', error.message);
        })
    }

    const handleGitSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( (result) => {
            const loggedUser = result.user;
            console.log(screenName);
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="flex justify-center items-center ">
            {
                user ?
                <button className="bg-red-500 grid p-4 rounded-xl text-white gap-2" onClick={() => handleGoogleSignOut()}>Sign out</button> :
                // keep in mind; you never assign another logic
                <>
                    <button className="bg-cyan-100 p-4" onClick={() => handleGoogleSignIn()}>Google Login</button>
                    <button className="bg-orange-100 p-4 ml-5" onClick={ ()=> handleGitSignIn() }>Github Login</button>
                </>
            }

            {
                user && <div className=" bg-orange-200">
                    <h3>User : {user.displayName} </h3>
                    <h3>Email : {user.email}</h3>
                    <img src={user.photoUrl} alt=""></img>
                </div>
            }
        </div>
    );
};

export default Login;