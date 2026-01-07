import React from 'react';

const Student = ({ student }) => { 

 const { StudentId, phone, location } = student.user;

  const handleCall = () => {
   window.location.href = `tel:${phone}`;
  }

 return (
  <div className="text-white border p-10 text-[15px] font-Alegreya rounded-xl space-y-5 ">
   <h1  >Student id : {StudentId}</h1>
   <h1> student location :  {location}</h1>
   <h1> phone :  {phone}</h1> 
   <button onClick={handleCall} className='flex items-center justify-center px-10 py-1 border rounded-md '>Call</button>
  </div>
 );
};

export default Student; 