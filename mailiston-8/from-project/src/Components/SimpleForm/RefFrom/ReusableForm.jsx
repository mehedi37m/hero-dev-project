import React from 'react';

const ReusableForm = ({fromTitle,handleSubmit, submitBtn = 'Submit',children}) => {


const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data);
}




    return (
        <div>
            {children}


             <form onSubmit={handleLocalSubmit} action="">

                
                <input
               
                type="text" placeholder='your name' name="name" id="" />
                <br />
                <input
              
                type="email" placeholder='your email' name="email" id="" />
                <br />
            
                <input
               
                type="password" placeholder='Password' name="password" id="" />
                <br />
                <input  className='p-3 bg-slate-500 rounded-lg mt-3 hover:cursor-pointer hover:bg-blue-600' type="submit" value={submitBtn} />
                
            </form>

        </div>
    );
};

export default ReusableForm;