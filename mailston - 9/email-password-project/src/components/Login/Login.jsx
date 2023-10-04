import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

import auth from '../../firebase/firebase.config';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
console.log(email, password);

setRegisterError('');
setSuccess('');
   
   signInWithEmailAndPassword(auth,email, password)
   .then(result => {
    console.log(result.user)

  if(result.user.emailVerified){
    setSuccess('welcome new life')
  }
  else{
    alert('Please enter valid email');
  }


    
   })
   .catch(error => {
    console.log(error);
    setRegisterError('please enter your email and password')
   })
  
}


const handleForgetPassword = e => {
 const email = emailRef.current.value;
 if(!email){
  console.log(emailRef.current.value)
  return;
 }
 else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
    console.log('please enter your email')
    return;
 }

sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('welcome')
  })
  .catch(error => {
    console.log(error)
  })

}



    return (
        <div>
           


           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
           <Link className='btn btn-xs' to="/register">Register</Link> 
    </div>
  </div>
</div>


<div>
                    {
                        success && <p className='text-center text-5xl font-extrabold my-20'>{success} </p>
                    }
                 </div>
 
                 <div>
                    {
                        registerError && <p>{registerError} </p>
                    }
                 </div>


        </div>
    );
};

export default Login;