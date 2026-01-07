import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Student from '../Student/Student';
import Menu from '../../Components/Menu/Menu';

const Students = () => {
 const studentData = useLoaderData();
 console.log(studentData);

 const [searchTerm, setSearchTerm] = useState("");

 const filteredStudents = studentData.filter((student) => {
  const name = student.user?.StudentId || "";
  const location = student.user?.location || "";
  const phone = student.user?.phone || "";
  return (
   name.toLowerCase().includes(searchTerm.toLowerCase()) ||
   location.toLowerCase().includes(searchTerm.toLowerCase()) ||
   phone.includes(searchTerm)
  );
 });

 return (
  <div className="text-white">

   <div className="menu flex justify-center">
    <Menu />
   </div>

   <h1 className="text-center font-BBH font-bold text-[13px] mt-5">
    we have{" "}
    <span className="bg-[#4fb2bf] px-3 py-1 rounded-3xl">
     {filteredStudents.length}
    </span>{" "}
    students
   </h1>

   <div className="flex justify-center mt-5">
    <input
     type="text"
     placeholder="Search by student id, phone, or location"
     className="px-3 py-2 text-white outline-none border-white border-2 rounded-md w-full max-w-md"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
    />
   </div>


   <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
    {filteredStudents.map((student) => (
     <Student student={student} key={student._id} />
    ))}
   </div>
  </div>
 );
};

export default Students;
