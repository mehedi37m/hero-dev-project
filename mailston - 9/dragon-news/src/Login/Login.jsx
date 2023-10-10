import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

const {signIn} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();



    const handleLogIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
    
        console.log(email, password)
  
        signIn(email, password)
        .then(result => {
            console.log(result.user)

            // navigate login

            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.log(error)
        })

   }


    return (
        <div>
            <Navbar></Navbar>
            <h1>Login</h1>

           <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
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
      <p className='font-bold text-center mb-5'>No Account ? <Link to="/register" className='underline text-blue-400'>Register</Link></p>
    </div>
  </div>
</div>
           </div>

        </div>
    );
};

export default Login;