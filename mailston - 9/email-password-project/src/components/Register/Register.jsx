import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
         




const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    console.log(accepted)

    if(password.length < 6){
        setRegisterError('please enter a valid password upto 6 characters or longer');
        return;
      }
      else if(!/[A-Z]/.test(password)){
        setRegisterError('please enter a valid password one uppercase');
        return ;
      }
      else if (!accepted){
        setRegisterError('please accept out terms and conditions');
        return ;
      }

    setRegisterError('');
    setSuccess('');

   
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result.user);
        setSuccess('welcome new life')

// update profile
updateProfile(result.user,{
    displayName: name,
    photoURL: "https://example.com/jane-q-user/profile.jpg"
})
.then( ( ) => {
    console.log('profile updated')
})
.catch(error => {
    console.log(error)
})


// send verification email : 

    sendEmailVerification(result.user)
    .then(() => {
        alert('verification email');
    })





    })
    .catch(error => {
        console.log(error);
        setRegisterError(error.message);
    })
}

    return (
        <div>
            
      <h1 className='text-3xl'>Please Register</h1>

                 <div className='md:w-1/2'>
                     
       <form onSubmit={handleRegister}>
          <input className='my-5 w-full py-2 px-4' type="text" placeholder='name' name="name" id="" required />
          <br />
          <input className='my-5 w-full py-2 px-4' type="email" placeholder='Email' name="email" id="" required />
          <br />
           
         <div className='relative'>

         <input placeholder='Password' className='w-full py-2 px-4' type={showPassword ? "text" : "password"} name="password" id="" required />
          <span className='  absolute top-3 right-4' onClick={()=> setShowPassword(!showPassword)}>
            {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </span>
         </div>

          <br />

          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept our <a href="">Terms Conditions</a> </label>
          <br />
          <input className='btn btn-secondary mt-5' type="submit" value="Register" />
       </form>
        
                 </div>

                 <div>
                    {
                        success && <p>{success} </p>
                    }
                 </div>
 
                 <div>
                    {
                        registerError && <p>{registerError} </p>
                    }
                 </div>
                       
                     <p>Already have an account ?  <Link className='btn btn-xs' to="/login">Login</Link></p>
        </div>
    );
};

export default Register;