import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

const {signInUser , signInWithGoogle} = useContext(AuthContext);
const navigate = useNavigate('');

const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

  signInUser(email, password)
  .then(result => {
    console.log(result.user)
    e.target.reset();
    navigate("/")
  })
  .catch(error => {
    console.log(error)
  })
}


const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then(result => {
    console.log(result.user)
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
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      <p className='mb-8 ml-8'>No account ? <Link className='underline text-blue-400' to="/register">Register</Link></p>
      <p className='mb-8 ml-8'> <Link onClick={handleGoogleSignIn} className='underline text-blue-500 text-xl' >Google</Link></p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;