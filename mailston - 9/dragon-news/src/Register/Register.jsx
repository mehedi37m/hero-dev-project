import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { AuthContext } from '../providers/AuthProvider';


const Register = () => {

const {createUser} = useContext(AuthContext);

const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password)


    // create user
    createUser(email, password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error)
    })

}





    return (
        <div>
            
            <div>
            <Navbar></Navbar>
            <h1>Login</h1>

           <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Your full Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>

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
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='font-bold text-center mb-5'>Already Account ? <Link to="/login" className='underline text-blue-400'>Login</Link></p>
    </div>
  </div>
</div>
           </div>

        </div>


        </div>
    );
};

export default Register;