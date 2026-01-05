import React, { useEffect, useState } from 'react';
import Tutor from '../Tutor/Tutor';
import Menu from '../../Components/Menu/Menu';
import Swal from 'sweetalert2';
import { Puff } from 'react-loader-spinner';

const Tutors = () => {
 const [data, setData] = useState([]);
 const [confirm, setConfirm] = useState([]);
 const [search, setSearch] = useState('');
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch('https://tutormate-server.vercel.app/tutors')
   .then(res => res.json())
   .then(data => {
    setData(data);
    setLoading(false);
   });
 }, []);

 // 🔍 Search logic (search everything)
 const filteredData = data.filter(tutor =>
  Object.values(tutor)
   .join(' ')
   .toLowerCase()
   .includes(search.toLowerCase())
 );

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
    setConfirm([...confirm, data]);

    fetch('https://tutormate-server.vercel.app/confirm', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data),
    })
     .then(res => res.json())
     .then(() => {
      Swal.fire({
       title: 'Confirmed!',
       icon: 'success',
       background: '#000000',
       color: '#ffffff',
       timer: 2000,
       showConfirmButton: false,
      });
     });
   }
  });
 };

 const handleDelete = (_id) => {
  Swal.fire({
   title: 'Delete Tutor?',
   text: 'This action cannot be undone!',
   icon: 'warning',
   background: '#000000',
   color: '#ffffff',
   showCancelButton: true,
   confirmButtonText: 'Yes, delete',
   confirmButtonColor: '#d33',
   cancelButtonColor: '#aaa',
  }).then((result) => {
   if (result.isConfirmed) {
    fetch(`https://tutormate-server.vercel.app/tutors/${_id}`, {
     method: 'DELETE',
    })
     .then(res => res.json())
     .then(result => {
      if (result.deletedCount > 0) {
       setData(data.filter(item => item._id !== _id));
       Swal.fire({
        title: 'Deleted!',
        icon: 'success',
        background: '#000000',
        color: '#ffffff',
        timer: 2000,
       });
      }
     });
   }
  });
 };

 return (
  <div className="px-4">
   <div className="flex justify-center items-center mb-6">
    <Menu />
   </div>

   <h1 className="font-BBH text-center text-3xl md:text-[40px] mb-6">
    Tutors
   </h1>

   {/* 🔍 Search Bar */}
   <div className="flex justify-center m-10">
    <input
     type="text"
     placeholder="Search tutors..."
     className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
    />
   </div>

   {/* Loader / Tutors Grid */}
   {
    loading ? (
     <div className="flex justify-center items-center h-[300px]">
      <Puff
       visible={true}
       height="80"
       width="80"
       color="#4fa94d"
       ariaLabel="puff-loading"
      />
     </div>
    ) : (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
       filteredData.length > 0 ? (
        filteredData.map(tutor => (
         <Tutor
          key={tutor._id}
          data={tutor}
          handleDelete={handleDelete}
          handleConfirm={handleConfirm}
         />
        ))
       ) : (
        <p className="text-center col-span-full text-gray-500">
         No tutors found
        </p>
       )
      }
     </div>
    )
   }
  </div>
 );
};

export default Tutors;
