import React from 'react';

const UploadStudents = () => {

 const handleForm = (e) => {
  e.preventDefault();
  const form = e.target;
  const StudentId = form.StudentId.value;
  const phone = form.phone.value;
  const location = form.location.value;
  const user = { StudentId, phone, location};

  console.log(user);

 }


 return (
  <div className='max-w-[600px] mx-auto' >
   <form onSubmit={handleForm} className='space-y-5 border-4 shadow-xl shadow-white p-10  rounded-xl' >
    <div>
     <h1 className='text-[20px] font-extrabold font-Alegreya' >student id : </h1>
     <input className='bg-white outline-none text-black h-full w-full px-5  py-3 rounded-2xl border-4 shadow-lg shadow-[#681919] border-red-700' type="text" name="StudentId" placeholder='Year-Id-Month' />
    </div>

    <div>
     <h1 className='text-[20px] font-extrabold font-Alegreya' >phone number : </h1>
     <input className='bg-white outline-none text-black h-full w-full px-5  py-3 rounded-2xl border-4 shad[#000] border-red-700' type="text" name="phone" placeholder='number' />
    </div>

    <div>
     <h1 className='text-[20px] font-extrabold font-Alegreya'>Location</h1>
     <input className='bg-white outline-none text-black h-full w-full px-5  py-3 rounded-2xl border-4 shad[#000] border-red-700' type="text" name="location" placeholder='Dhaka' />
    </div>

    <div className='flex justify-center'>
     <input className='bg-red-800  mt-7  px-20 py-3 rounded-xl cursor-pointer text-[17px] font-BBH font-bold' type="submit" value="submit" />
    </div>

   </form>
  </div>
 );
};

export default UploadStudents;