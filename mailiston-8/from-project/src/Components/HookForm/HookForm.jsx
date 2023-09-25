import React from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
    //  const [name, handleNameChange] = useInputState('hello');
    const emailState = useInputState('@gmail.com')



    const handleSubmit = e => {
        console.log(emailState.value)
        e.preventDefault();
    }
    return (
        <div className='mt-10'>
            <h1 className='font-extrabold'>custom useState</h1>
             <form onSubmit={handleSubmit} action="">
                {/* <input
               value={name} onChange={handleNameChange}
                type="text" placeholder='your name' name="name" id="" />
                <br /> */}
                <input
               {...emailState} 
                type="email" placeholder='your email' name="email" id="" />
                <br />
            
                <input
                
                type="password" placeholder='Password' name="password" id="" />
                <br />
                <input className='p-3 bg-slate-500 rounded-lg mt-3 hover:cursor-pointer hover:bg-blue-600' type="submit" value="submit" />
                
            </form>
        </div>
    );
};

export default HookForm;