import React, { useEffect, useState } from 'react';
import ConfirmTuttor from '../confirmtutor/ConfirmTuttor';
import Menu from '../../Components/Menu/Menu';
import Swal from 'sweetalert2';

const ConfirmTutors = () => {
 const [confirmData, setConfirmData] = useState([]);

 useEffect(() => {
  fetch('http://localhost:5000/confirm')
   .then(res => res.json())
   .then(data => setConfirmData(data))
 }, []);

 const handleDelete = (_id) => {
  Swal.fire({
   title: 'Are you sure?',
   text: 'Do you want to delete this item?',
   icon: 'warning',
   iconColor: 'red',
   background: '#000000',
   color: '#ffffff',
   showCancelButton: true,
   confirmButtonText: 'Yes, delete',
   cancelButtonText: 'Cancel',
   confirmButtonColor: '#d33',
   cancelButtonColor: '#aaa',
  }).then((result) => {
   if (result.isConfirmed) {
    fetch(`http://localhost:5000/confirm/${_id}`, { method: 'DELETE' })
     .then(res => res.json())
     .then(data => {
      if (data.deletedCount > 0) {
       const remaining = confirmData.filter(item => item._id !== _id);
       setConfirmData(remaining);

       Swal.fire({
        title: 'Deleted!',
        text: 'Item has been removed.',
        icon: 'success',
        iconColor: 'red',
        background: '#000000',
        color: '#ffffff',
        timer: 2000,
        showConfirmButton: false,
       });
      }
     });
   }
  });
 };

 return (
  <div className="px-4 sm:px-8 lg:px-16">
   <div className="flex justify-center items-center mb-6">
    <Menu />
   </div>
   <h1 className="text-center font-BBH text-4xl sm:text-5xl lg:text-6xl mb-8 sm:mb-10">
    Confirm Tutors
   </h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {confirmData.map(cd => (
     <ConfirmTuttor key={cd._id} handleDelete={handleDelete} cd={cd} />
    ))}
   </div>
  </div>
 );
};

export default ConfirmTutors;
