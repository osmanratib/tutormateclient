import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
 const { signInUser, googleSignIn } = useContext(AuthContext);
 const navigate = useNavigate();

 // 🔹 Email / Password Sign In
 const handleSignIn = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
   await signInUser(email, password);
   Swal.fire({
    title: 'Welcome back!',
    icon: 'success',
    background: "#fff",
    color: "#000",
    timer: 1500,
    showConfirmButton: false
   });
   navigate('/');
  } catch (error) {
   if (error.code === 'auth/user-not-found') {
    navigate('/signup');
   } else {
    Swal.fire('Error', error.message, 'error');
   }
  }
 };

 // 🔹 Google Sign In
 const handleGoogleSignIn = () => {
  googleSignIn()
   .then(() => {
    Swal.fire({
     title: 'Signed in successfully',
     icon: 'success',
     timer: 1500,
     showConfirmButton: false
    });
    navigate('/');
   })
   .catch(error => {
    Swal.fire('Error', error.message, 'error');
   });
 };

 return (
  <div className="flex items-center justify-center mt-12 px-4">
   <div className="border-2 rounded-xl shadow-xl shadow-white border-red-500 p-9 text-center w-full sm:w-auto">

    <div className="content">
     <h1 className="font-BBH text-[25px]">sign in</h1>
    </div>

    {/* GOOGLE SIGN IN */}
    <div className="googleAuth flex justify-center">
     <button
      onClick={handleGoogleSignIn}
      className="m-3 capitalize flex gap-2 font-Alegreya items-center justify-center bg-[#fff] text-black px-5 py-1 rounded font-bold w-full sm:w-auto"
     >
      <span className="text-black bg-black px-3 py-1 rounded-full">
       <FaGoogle />
      </span>
      signIn with google
     </button>
    </div>

    {/* Divider */}
    <div className="text-[17px] flex items-center justify-center gap-2 my-3">
     <div className="h-[1px] bg-white w-full"></div>
     or
     <div className="h-[1px] bg-white w-full"></div>
    </div>

    {/* EMAIL SIGN IN FORM */}
    <form onSubmit={handleSignIn} className="grid grid-cols-1 gap-3 justify-center items-center">

     <div>
      <h1 className="text-white font-Alegreya font-bold text-[16px] mb-2">email :</h1>
      <div className="bg-white w-full sm:w-[300px] h-[50px] rounded-xl p-2">
       <input
        className="w-full h-full bg-white outline-none text-black"
        type="email"
        name="email"
        placeholder="name@gmail.com"
        required
       />
      </div>
     </div>

     <div>
      <h1 className="text-white font-Alegreya font-bold text-[16px] mb-2">password</h1>
      <div className="bg-white w-full sm:w-[300px] h-[50px] rounded-xl p-2">
       <input
        className="w-full h-full bg-white outline-none text-black"
        type="password"
        name="password"
        placeholder="password"
        required
       />
      </div>
     </div>

     <h1 className="capitalize font-Alegreya flex items-center justify-center mt-2 gap-2 text-sm">
      Don't have an account?
      <Link to="/signup" className="text-blue-300">sign up</Link>
     </h1>

     <button className="bg-[#ac2525] w-full sm:w-[300px] h-[50px] rounded mt-7">
      <input
       className="cursor-pointer w-full text-white text-[30px] uppercase font-Alegreya font-bold"
       type="submit"
       value="sign in"
      />
     </button>

    </form>
   </div>
  </div>
 );
};

export default SignIn;
