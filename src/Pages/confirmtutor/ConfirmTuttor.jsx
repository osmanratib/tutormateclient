import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmTuttor = ({ cd, handleDelete }) => {
 const { name, dept, _id, image } = cd;

 return (
  <div className="px-2 sm:px-4 py-2">
   <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between border border-red-600 rounded-3xl px-4 py-3 gap-3 font-Alegreya uppercase bg-black">

    {/* Tutor Info */}
    <div className="flex items-center gap-3">
     <img
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
      src={`https://tutormateadminserver.vercel.app/uploads/${image}`}
      alt={name}
     />
     <h1 className="text-sm sm:text-base truncate max-w-[120px] sm:max-w-xs">{name}</h1>
    </div>

    {/* Department */}
    <h1 className="text-sm sm:text-base mt-2 sm:mt-0 text-center sm:text-left truncate">{dept}</h1>

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 justify-center sm:justify-start">
     <button
      onClick={() => handleDelete(_id)}
      className="text-white text-xs sm:text-sm font-bold bg-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl flex-1 sm:flex-none text-center"
     >
      Delete
     </button>

     <Link to={`/tutors/${_id}`} className="flex-1 sm:flex-none">
      <button className="text-white text-xs sm:text-sm bg-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl w-full text-center">
       Details
      </button>
     </Link>
    </div>

   </div>
  </div>
 );
};

export default ConfirmTuttor;
