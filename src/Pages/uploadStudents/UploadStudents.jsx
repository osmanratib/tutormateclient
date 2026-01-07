import React from 'react';
import Menu from '../../Components/Menu/Menu';
import Swal from 'sweetalert2';

const UploadStudents = () => {

 const handleForm = (e) => {
  e.preventDefault();
  const form = e.target;

  const StudentId = form.StudentId.value;
  const phone = form.phone.value;
  const location = form.location.value;

  const user = { StudentId, phone, location };

  // 🔔 Confirmation Alert
  Swal.fire({
   title: 'Are you sure?',
   text: 'Do you want to submit this student?',
   icon: 'warning',
   iconColor: 'red',
   background: '#000000',
   color: '#ffffff',
   showCancelButton: true,
   confirmButtonText: 'Yes, confirm',
   cancelButtonText: 'Cancel',
   confirmButtonColor: 'red',
   cancelButtonColor: '#aaa',
  }).then((result) => {
   if (result.isConfirmed) {

    fetch('https://tutormate-server.vercel.app/students', {
     method: 'POST',
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify({ user })
    })
     .then(res => res.json())
     .then(data => {
      if (data.acknowledged === true) {
       Swal.fire({
        title: 'Submitted!',
        icon: 'success',
        background: '#000000',
        color: '#ffffff',
       });

       // 🔄 Reset Form
       form.reset();
      } else {
       Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Something went wrong'
       });
      }
     })
     .catch(() => {
      Swal.fire({
       icon: 'error',
       title: 'Error!',
       text: 'Server error occurred'
      });
     });
   }
  });
 };

 return (
  <div className='max-w-[600px] mx-auto'>
   <div className='flex items-center justify-center'>
    <Menu />
   </div>

   <h1 className='text-center text-[20px] lg:text-[40px] font-BBH font-bold mb-5'>
    student details
   </h1>

   <form onSubmit={handleForm} className='space-y-5 border-4 shadow-xl shadow-white p-10 rounded-xl'>

    <div>
     <h1 className='text-[20px] font-extrabold font-Alegreya'>student id :</h1>
     <input
      className='bg-white outline-none text-black w-full px-5 py-3 rounded-2xl border-4 shadow-lg shadow-[#681919] border-red-700'
      type="text"
      name="StudentId"
      placeholder='Year-Id-Month'
      required
     />
    </div>

    <div>
     <h1 className='text-[20px] font-extrabold font-Alegreya'>phone number :</h1>
     <input
      className='bg-white outline-none text-black w-full px-5 py-3 rounded-2xl border-4 border-red-700'
      type="text"
      name="phone"
      placeholder='number'
      required
     />
    </div>

    <div>
     <h1 className='text-[20px] font-extrabold font-Alegreya'>Location</h1>
     <input
      className='bg-white outline-none text-black w-full px-5 py-3 rounded-2xl border-4 border-red-700'
      type="text"
      name="location"
      placeholder='Dhaka'
      required
     />
    </div>

    <div className='flex justify-center'>
     <input
      className='bg-red-800 mt-7 px-20 py-3 rounded-xl cursor-pointer text-[17px] font-BBH font-bold'
      type="submit"
      value="submit"
     />
    </div>

   </form>
  </div>
 );
};

export default UploadStudents;
