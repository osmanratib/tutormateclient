import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import User from '../User/User';
import Menu from '../../Components/Menu/Menu';

const Users = () => {
 const loadedData = useLoaderData();
 const [users, setUsers] = useState(loadedData);

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
    fetch(`https://tutormate-server.vercel.app/users/${_id}`, {
     method: 'DELETE',
    })
     .then(res => res.json())
     .then(data => {
      if (data.deletedCount > 0) {
       const remaining = users.filter(user => user._id !== _id);
       setUsers(remaining);

       Swal.fire({
        title: 'Deleted!',
        text: 'Item has been removed.',
        icon: 'success',
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
  <div>

   <div className='flex justify-center items-center'>
    <Menu />
   </div>

   <div className="content flex items-center justify-center">
    <h1 className="text-[40px] font-BBH">Users</h1>
   </div>



   <div className="grid gap-9 grid-cols-1 max-w-[1000px] mx-auto font-Alegreya rounded-2xl mt-10">
    {users.map((user, idx) => (
     <User
      key={user._id}
      user={user}
      idx={idx}
      handleDelete={handleDelete}
     />
    ))}
   </div>
  </div>
 );
};

export default Users;
