import React, { useEffect, useState } from 'react';
import Tutor from '../Tutor/Tutor';
import Menu from '../../Components/Menu/Menu';
import Swal from 'sweetalert2';


const Tutors = () => {

 const [data, setData] = useState([]);
 const [confirm, setConfirm] = useState([]);


 useEffect(() => {
  fetch('https://tutormateadminserver.vercel.app/tutors')
   .then(res => res.json())
   .then(data => setData(data));
 }, [])


 const handleConfirm = (data) => {
  Swal.fire({
   title: 'Are you sure?',
   text: 'Do you want to confirm this tutor?',
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
    const newData = [...confirm, data];
    setConfirm(newData);

    fetch('https://tutormateadminserver.vercel.app/confirm', {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    })
     .then(res => res.json())
     .then(result => {
      Swal.fire({
       title: 'Confirmed!',
       icon: 'success',
       iconColor: 'red',
       background: '#000000',
       color: '#ffffff',
       timer: 2000,
       showConfirmButton: false,
      });
      console.log(result);
     });
   }
  });
 };


 // handle delete 
 const handleDelete = (_id) => {
  Swal.fire({
   title: 'Delete Tutor?',
   text: 'This action cannot be undone!',
   icon: 'warning',
   iconColor: 'white',
   background: '#000000',
   color: '#ffffff',
   showCancelButton: true,
   confirmButtonText: 'Yes, delete',
   cancelButtonText: 'Cancel',
   confirmButtonColor: '#d33',
   cancelButtonColor: '#aaa',
  }).then((result) => {
   if (result.isConfirmed) {
    fetch(`https://tutormateadminserver.vercel.app/tutors/${_id}`, {
     method: 'DELETE',
    })
     .then(res => res.json())
     .then(result => {
      if (result.deletedCount > 0) {
       setData(data.filter(item => item._id !== _id));
       Swal.fire({
        title: 'Deleted !',
        icon: 'success',
        iconColor: 'white',
        background: '#000000',
        color: '#ffffff',
        timer: 3000
       });
      }
     });
   }
  });
 };


 return (
  <div>
   <div className='flex justify-center items-center'>
    <Menu />
   </div>
   <h1 className='font-BBH text-center text-[40px] mb-10'>Tutors</h1>

   <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
    {
     data.map(data => <Tutor key={data._id} data={data} handleDelete={handleDelete} handleConfirm={handleConfirm} />)
    }
   </div>
  </div>
 );
};

export default Tutors;