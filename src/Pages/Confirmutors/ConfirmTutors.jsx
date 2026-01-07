import React, { useEffect, useState } from 'react';
import ConfirmTuttor from '../confirmtutor/ConfirmTuttor';
import Menu from '../../Components/Menu/Menu';
import Swal from 'sweetalert2';
import { Puff } from 'react-loader-spinner';

const ConfirmTutors = () => {
 const [confirmData, setConfirmData] = useState([]);
 const [search, setSearch] = useState('');
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch('https://tutormate-server.vercel.app/confirm')
   .then(res => res.json())
   .then(data => {
    setConfirmData(data);
    setLoading(false);
   });
 }, []);

 const filteredData = confirmData.filter(item =>
  Object.values(item)
   .join(' ')
   .toLowerCase()
   .includes(search.toLowerCase())
 );

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
    fetch(`https://tutormate-server.vercel.app/confirm/${_id}`, {
     method: 'DELETE'
    })
     .then(res => res.json())
     .then(data => {
      if (data.deletedCount > 0) {
       setConfirmData(confirmData.filter(item => item._id !== _id));

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

   {/* 🔍 Search Bar */}
   <div className="flex justify-center m-10">
    <input
     type="text"
     placeholder="Search confirmed tutors..."
     className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
    />
   </div>

   {/* Loader / Grid */}
   {
    loading ? (
     <div className="flex justify-center items-center h-[300px]">
      <Puff
       visible={true}
       height="80"
       width="80"
       color="red"
       ariaLabel="puff-loading"
      />
     </div>
    ) : (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {
       filteredData.length > 0 ? (
        filteredData.map(cd => (
         <ConfirmTuttor
          key={cd._id}
          handleDelete={handleDelete}
          cd={cd}
         />
        ))
       ) : (
        <p className="text-center col-span-full text-gray-500">
         No confirmed tutors found
        </p>
       )
      }
     </div>
    )
   }
  </div>
 );
};

export default ConfirmTutors;
