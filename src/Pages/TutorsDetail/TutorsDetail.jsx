import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";

const TutorsDetail = () => {
 const personData = useLoaderData();
 const { name, university, dept, exp, college, phone, image } = personData;

 return (
  <div className="px-4 sm:px-8 lg:px-16 py-6">

   {/* Back Button */}
   <Link to="/confirm">
    <button className="flex items-center gap-2 text-sm sm:text-base mb-4">
     <IoArrowBackCircle size={22} />
     Back
    </button>
   </Link>

   {/* Main Card */}
   <div className="
        flex flex-col lg:flex-row
        gap-6 lg:gap-20
        justify-center items-center
        border-2 border-[#3db154]
        rounded-xl
        font-Alegreya uppercase
        p-4 sm:p-6 lg:p-10
        shadow-2xl shadow-[#7ec180]
        mt-6
      ">

    {/* Image */}
    <img
     className="
            w-full
            max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]
            h-auto
            rounded-lg
            object-cover
          "
     src={image}
     alt={name}
    />

    {/* Text Content */}
    <div className="w-full text-sm sm:text-base space-y-3">
     <h1>
      Hey, I am{" "}
      <span className="bg-white text-black px-3 py-1 rounded-lg inline-block">
       {name}
      </span>
     </h1>

     <h1>
      I am a student of{" "}
      <span className="bg-white text-black px-3 py-1 rounded-lg inline-block">
       {university}
      </span>
     </h1>

     <h1>
      Currently pursuing undergraduate in{" "}
      <span className="bg-white text-black px-3 py-1 rounded-lg inline-block">
       {dept}
      </span>
     </h1>

     <h1>
      My college was{" "}
      <span className="bg-white text-black px-3 py-1 rounded-lg inline-block">
       {college}
      </span>
     </h1>

     <h1>
      I have{" "}
      <span className="bg-white text-black px-3 py-1 rounded-lg inline-block">
       {exp}
      </span>{" "}
      experience in this tuition field
     </h1>

     <h1>
      You can contact me at{" "}
      <span className="bg-white text-black px-3 py-1 rounded-lg inline-block">
       {phone}
      </span>
     </h1>

     {/* Call Button */}
     <a href={`tel:${phone}`}>
      <button className="
              bg-[#841515]
              w-full
              h-[48px]
              rounded
              font-extrabold
              uppercase
              mt-4
            ">
       Call
      </button>
     </a>
    </div>

   </div>
  </div>
 );
};

export default TutorsDetail;
