import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Menu() {
 const [open, setOpen] = React.useState(false);

 return (
  <Box className="flex items-center bg-black px-4 py-2">
   {/* Menu Button */}
   <button
    onClick={() => setOpen(true)}
    className="text-white text-3xl hover:text-gray-300 transition"
   >
    <HiOutlineMenuAlt4 />
   </button>

   {/* Drawer */}
   <Drawer
    open={open}
    onClose={() => setOpen(false)}
    anchor="left"
    sx={{
     backgroundColor: 'black', // slate-900
     color: 'white',
    }}
   >
    <ModalClose sx={{ color: 'white' }} />

    {/* Menu Content */}
    <div className="mt-12 lg:px-6 bg-white">
     <ul className="grid grid-cols-1 gap-10 justify-center items-center text-center text-lg font-medium bg-white"> 
      <h1 className='font-Alegreya text-[40px] p-5 rounded'>TutorMate</h1>
     <Link to={'/'}>
       <li className=" bg-white font-BBH cursor-pointer  text-[25px] lg:text-[30px] uppercase text-[#8f2121] hover:text-[#000000] transition">
        Home
       </li>
     </Link>
     <Link to={'/tutors'}>
       <li className=" bg-white font-BBH cursor-pointer text-[25px] lg:text-[30px] uppercase text-[#8f2121] hover:text-[#000000] transition">
        Tutors
       </li>
     </Link>
     <Link to={'/users'}>
       <li className=" bg-white font-BBH cursor-pointer text-[25px] lg:text-[30px] uppercase text-[#8f2121] hover:text-[#000000] transition">
         users
       </li>
     </Link>
      <Link to={'/confirm'}>
       <li className=" bg-white font-BBH cursor-pointer text-[25px] lg:text-[30px] uppercase text-[#8f2121] hover:text-[#000000] transition">
        confirm tutors
       </li>
      </Link>
      <Link to={'/uploadTutor'}>
       <li className=" bg-white font-BBH cursor-pointer text-[25px] lg:text-[30px] uppercase text-[#8f2121] hover:text-[#000000] transition">
        Upload details
       </li>
      </Link>
     </ul> 
    </div>
   </Drawer>
  </Box>
 );
}
