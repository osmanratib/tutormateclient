import React from 'react';

const User = ({ user, handleDelete, idx }) => {
 const { name, email } = user;

 return (
  <div className="lg:w-full lg:space-y-0 space-y-6 lg:flex items-center  justify-center ">
   <ul className='lg:flex justify-between items-center gap-4' > 
    <li>{idx + 1}</li>
    <li className='w-[300px]' >email: {email}</li>
    <li className='w-[300px]'>name : {name}</li>
   </ul>  

   <button onClick={handleDelete} className='font-Alegreya px-5 py-1 rounded bg-red-700' >Delete</button>

  </div>
 );
};

export default User;
