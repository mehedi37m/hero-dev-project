import React, { useEffect, useRef } from 'react';

const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect(() => {
        nameRef.current.focus();
    },[])
   
   const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

   }

    return (
        <div className='mt-10'>
            <h1 className='font-extrabold'>useRef</h1>
            <form onSubmit={handleSubmit} action="">
                <input
               ref={nameRef}
                type="text"  placeholder='your name' name="name" id="" />
                <br />
                <input
              ref={emailRef}
                type="email" defaultValue={' @gmail.com'} placeholder='your email' name="email" id="" />
                <br />
            
                <input
                ref={passwordRef}
                type="password" placeholder='Password' name="password" id="" />
                <br />
                <input  className='p-3 bg-slate-500 rounded-lg mt-3 hover:cursor-pointer hover:bg-blue-600' type="submit" value="submit" />
                
            </form>


          
        </div>
    );
};

export default RefFrom;