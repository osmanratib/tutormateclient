import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";

const TutorsDetail = () => {
 const personData = useLoaderData();
 const { name, university, dept, exp, college, phone } = personData;
 return (
  <div>
   <div>
    <Link to={'/confirm'}>
     <button className='flex items-center gap-1' ><IoArrowBackCircle /> back</button>
    </Link>
   </div>
   <div className='flex gap-32 justify-center  items-center border-[2px] rounded-xl border-[#3db154] font-Alegreya uppercase p-10 shadow-2xl shadow-[#7ec180] mt-12 '>
    <img className='w-[350px] h-[400px] rounded-lg' src={`https://tutormateadminserver.vercel.app/uploads/${personData.image}`} alt="" />
    <div>
     <h1>Hey , i am <span className='bg-[#fff] text-black px-5 rounded-lg'>{name}</span></h1>
     <h1> i am a student of <span className='bg-[#fff] text-black px-5 rounded-lg'>{university}</span>. </h1>
     <h1>currently i pursuing my undergraduate under <span className='bg-[#fff] text-black px-5 rounded-lg'>{dept}</span></h1>
     <h1> my college was  <span className='bg-[#fff] text-black px-5 rounded-lg'>{college}</span></h1>
     <h1>i have <span className='bg-[#fff] text-black px-5 rounded-lg'>{exp}</span>experience in this tuition field .  </h1>
     <h1>you can contact me by call . here is my phone number  : <span className='bg-[#fff] text-black px-5 rounded-lg'>{phone}</span></h1>
     <a href={`tel:${phone} `}>
      <button className='bg-[#841515] w-full h-[50px] rounded font-extrabold  uppercase mt-5'>Call</button>
     </a>
    </div>
   </div>
  </div>
 );
};

export default TutorsDetail;