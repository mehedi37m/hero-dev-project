import React, { useState } from 'react';

const SimpleForm = () => {
    const [name, setName] = useState('hello');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error , setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
       if(password.length < 6){
        setError('please type a more than 6 characters');
        
       }else{
        setError('');
        console.log(name,email,password)
       }
       
    }

const handleNameChange = e => {
    // e.preventDefault();
    setName(e.target.value)
}

     const handleEmailChange = e => {
        // e.preventDefault();
      setEmail(e.target.value)
      
     }

const handlePasswordChange = e => {
    // e.preventDefault();
    setPassword(e.target.value)
}


    return (
        <div>
            <h1 className='font-extrabold'>useState</h1>
            <form onSubmit={handleSubmit} action="">
                <input
                onChange={handleNameChange}
                type="text" placeholder='your name' name="name" id="" />
                <br />
                <input
                onChange={handleEmailChange}
                type="email" placeholder='your email' name="email" id="" />
                <br />
            
                <input
                onChange={handlePasswordChange}
                type="password" placeholder='Password' name="password" id="" />
                <br />
                <input  className='p-3 bg-slate-500 rounded-lg mt-3 hover:cursor-pointer hover:bg-blue-600' type="submit" value="submit" />
                {
                    error && <p>{error} </p>
                }
            </form>
        </div>
    );
};

export default SimpleForm;
