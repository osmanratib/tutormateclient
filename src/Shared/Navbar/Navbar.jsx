import React, { useContext } from 'react';
import LocalTime from '../../Components/LocalTime/LocalTime';
import Menu from '../../Components/Menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
 const { user, logOut } = useContext(AuthContext);
 const navigate = useNavigate();

 const handleLogout = async () => {
  const result = await Swal.fire({
   title: 'Are you sure?',
   text: 'You will be logged out from your account',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#ac2525',
   cancelButtonColor: '#6b7280',
   confirmButtonText: 'Yes, log out',
   cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
   try {
    await logOut();

    Swal.fire({
     title: 'Logged Out!',
     text: 'You have been successfully logged out.',
     icon: 'success',
     timer: 1500,
     showConfirmButton: false
    });

    navigate('/signin');
   } catch (error) {
    Swal.fire({
     title: 'Error!',
     text: error.message,
     icon: 'error'
    });
   }
  }
 };

 return (
  <div className='flex justify-between items-center'>
   <div className="localTime w-[120px]">
    <LocalTime />
   </div>

   <div className="menu">
    <Menu />
   </div>

   <div className="login">
    {user ? (
     <button
      onClick={handleLogout}
      className='bg-white text-black font-Alegreya px-5 py-1 rounded-xl font-semibold'
     >
      Log Out
     </button>
    ) : (
     <Link to='/signin'>
      <button className='bg-white text-black font-Alegreya px-5 py-1 rounded-xl font-semibold'>
       Sign In
      </button>
     </Link>
    )}
   </div>
  </div>
 );
};

export default Navbar;
