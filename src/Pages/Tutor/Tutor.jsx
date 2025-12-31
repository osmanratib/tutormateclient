import React from 'react';

const Tutor = ({ data, handleConfirm, handleDelete }) => {

 const { _id, name, dept, university, college, exp, phone } = data;



 return (
  <div className='bg-black border-[5px] shadow-2xl shadow-[#ffffff93] border-[#911f1f] lg:w-[400px] h-[540px] p-10 rounded-lg space-y-5 ' >
   <div className="photo flex justify-center">
    <img className='w-[150x] h-[150px]' src={`https://tutormateadminserver.vercel.app/uploads/${data.image}`} alt="" />
   </div>
   <div className="content space-y-2 font-Alegreya uppercase font-bold  ">
    <h1 className='text-[#98d2f9]'>{name}</h1>
    <h1>university name : <span className='bg-[#841515] px-5 py-1 rounded-3xl text-[12px]' > {university}</span> </h1>
    <h1>college : {college}</h1>
    <h1>Department : {dept}</h1>
    <h1>experience  : {exp}</h1>
    <h1>Phone Number : {phone}</h1>

    <div className='flex items-center gap-3'>
     <button onClick={() => handleConfirm(data)} className='font-Alegreya  tex-[12px] px-5 py-[2px] rounded bg-white uppercase text-black'>Confirm</button>
     <button onClick={() => handleDelete(_id)} className='font-Alegreya  tex-[12px] px-5 py-[2px] rounded bg-white uppercase text-black'>Delete</button>
    </div>
   </div>
   <a href={`tel:${phone} `}>
    <button className='bg-[#841515] w-full h-[50px] rounded font-extrabold  uppercase mt-5'>Call</button>
   </a>
  </div>
 );
};

export default Tutor;


















// 