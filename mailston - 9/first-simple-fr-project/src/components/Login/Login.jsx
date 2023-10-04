
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.int";
import { useState } from "react";

const Login = () => {
        const [user, setUser] = useState(null);


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const logInUser = result.user;
            console.log(logInUser)
            setUser(logInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }



  const handleSignOut = () => {
      signOut(auth)
      .then(result => {
        console.log(result)
        setUser(null)
      })
      .catch(error => {
        console.log(error)
      })
  }


const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser);

    })
    .catch(error => {
        console.log(error)
    })
}



    return (
        <div>
           { 
          user ? 
          <button onClick={handleSignOut}>sing out</button>  :

          <div>
             <button onClick={handleGoogleSignIn}>google login</button> 
           <button onClick={handleGithubLogin}>Github login</button>
          </div>

            }

           { user && <div>
                <h1>User: {user.displayName} </h1>
                <h1>User: {user.email} </h1>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;