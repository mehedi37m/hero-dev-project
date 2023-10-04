import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';






const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [count, setCount] = useState()


  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user =  result.user;
      setCount(user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <div>
        <button onClick={handleGoogleLogin}>google login</button>

      
      </div>
     { count && <div>
        <p>name :{count.displayName} </p>
      </div>}
     
    </>
  )
}

export default App
