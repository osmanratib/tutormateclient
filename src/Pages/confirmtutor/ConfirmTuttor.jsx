import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmTuttor = ({ cd, handleDelete }) => {
 const { name, dept, _id, image } = cd;

 return (
  <div className="px-3 sm:px-6 py-3 ">
   <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center
        border-4 shadow-lg shadow-white border-red-700 rounded-2xl bg-black px-4 sm:px-6 py-4
        hover:shadow-lg hover:shadow-red-900/30 transition duration-300">

    {/* Tutor Profile */}
    <div className="sm:col-span-5 flex items-center gap-4">
     <img
      src={image}
      alt={name}
      className="w-14 h-14 rounded-full object-cover border border-red-600  "
     />
     <div className="overflow-hidden">
      <h2 className="text-sm sm:text-base font-semibold uppercase truncate">
       {name}
      </h2>
      <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full
              bg-red-900 text-red-200">
       {dept}
      </span>
     </div>
    </div>

    {/* Department (Desktop Only Extra Column) */}
    <div className="hidden sm:block sm:col-span-3 text-sm uppercase text-red-200">
     {dept}
    </div>
    {/* Actions */}
    <div className="sm:col-span-4 flex gap-3 justify-end">
     <Link to={`/tutors/${_id}`} className="w-full sm:w-auto">
      <button className="w-full sm:w-auto text-xs sm:text-sm px-4 py-2
              rounded-xl bg-red-800 hover:bg-red-700 transition font-medium">
       View Details
      </button>
     </Link>

     <button
      onClick={() => handleDelete(_id)}
      className="w-full sm:w-auto text-xs sm:text-sm px-4 py-2
              rounded-xl bg-red-700 hover:bg-red-600 transition font-bold"
     >
      Delete
     </button>
    </div>
   </div>
  </div>
 );
};

export default ConfirmTuttor;
