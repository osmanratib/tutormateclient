import React from 'react';

const User = ({user , handleDelete , idx}) => { 
 const {name , email} = user ; 
 return (
  <div>
   <div className="box flex justify-between items-center bg-white px-1 lg:px-7 py-2 lg:py-5 rounded-2xl">
    <span className="bg-white text-black">{idx + 1}</span>
    <h1 className="bg-white text-black">{email}</h1>
    <h1 className="bg-white text-black font-bold capitalize">{name}</h1>
    <button onClick={() => handleDelete(user._id)} className="text-black font-BBH">
     <h1 className="bg-red-700 px-1 lg:px-5 py-1 rounded-sm">delete</h1>
    </button>
   </div>
  </div>
 );
};

export default User;
