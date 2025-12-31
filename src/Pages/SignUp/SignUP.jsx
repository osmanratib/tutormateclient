import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const SignUP = () => {
 const { createUser, googleSignIn } = useContext(AuthContext);
 const navigate = useNavigate();

 // 🔹 Email/Password Sign Up
 const handleAuth = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
   Swal.fire('Error', 'Passwords do not match', 'error');
   return;
  }

  createUser(email, password, name)
   .then(() => {
    fetch('http://localhost:5000/users', {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ name, email })
    });

    form.reset();
    Swal.fire({
     title: 'Registered!',
     icon: 'success',
     timer: 2000
    }).then(() => navigate('/signin'));
   })
   .catch(error => Swal.fire('Error', error.message, 'error'));
 };

 // 🔹 Google Sign Up
 const handleGoogleSignUp = () => {
  googleSignIn()
   .then(result => {
    const user = result.user;

    fetch('http://localhost:5000/users', {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
      name: user.displayName,
      email: user.email
     })
    });

    Swal.fire({
     title: 'Welcome!',
     text: 'Signed up with Google',
     icon: 'success',
     timer: 1500
    }).then(() => navigate('/'));
   })
   .catch(error => Swal.fire('Error', error.message, 'error'));
 };

 return (
  <div className='flex items-center justify-center '>
   <div className='border-2 rounded-xl shadow-xl shadow-white border-red-500  p-9  text-center '>
    <div className="content">
     <h1 className='font-BBH text-[25px]'>signup</h1>
    </div>

    {/* GOOGLE SIGN UP */}
    <div className="googleAuth flex justify-center ">
     <button
      onClick={handleGoogleSignUp}
      className='m-3 capitalize flex gap-2 font-Alegreya items-center justify-center bg-[#fff] text-black px-5 py-1 rounded font-bold '
     >
      <span className='text-black bg-black px-3 py-1 rounded-full'>
       <FaGoogle />
      </span>
      sign up with google
     </button>
    </div>

    <div className=' text-[17px] flex items-center justify-center gap-2'>
     <div className='h-[1px] bg-white w-full'></div>
     or
     <div className='h-[1px] bg-white w-full'></div>
    </div>

    {/* EMAIL / PASSWORD FORM — UNCHANGED */}
    <form onSubmit={handleAuth} className='grid grid-cols-1 gap-3 justify-center items-center'>

     <div>
      <h1 className="text-white font-Alegreya font-bold text-[16px] flex items-center gap-3 mb-2">
       name :
      </h1>
      <div className="name bg-white w-[300px] h-[50px] rounded-xl p-2 ">
       <input
        className="w-full h-full bg-white outline-none text-black"
        type="text"
        name="name"
        placeholder="ratib"
        required
       />
      </div>
     </div>

     <div>
      <h1 className="text-white font-Alegreya font-bold text-[16px] flex items-center gap-3 mb-2">
       email :
      </h1>
      <div className="name bg-white w-[300px] h-[50px] rounded-xl p-2 ">
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
      <h1 className="text-white font-Alegreya font-bold text-[16px] flex items-center gap-3 mb-2">
       password
      </h1>
      <div className="name bg-white w-[300px] h-[50px] rounded-xl p-2 ">
       <input
        className="w-full h-full bg-white outline-none text-black"
        type="password"
        name="password"
        placeholder="password"
        required
       />
      </div>
     </div>

     <div>
      <h1 className="text-white font-Alegreya font-bold text-[16px] flex items-center gap-3 mb-2">
       confirm password
      </h1>
      <div className="name bg-white w-[300px] h-[50px] rounded-xl p-2 ">
       <input
        className="w-full h-full bg-white outline-none text-black"
        type="password"
        name="confirmPassword"
        placeholder="confirmPassword"
        required
       />
      </div>
     </div>

     <h1 className='capitalize font-Alegreya flex items-center gap-2 justify-center mt-2'>
      already have an account ?
      <Link to={'/signin'} className='text-blue-300'>sign in</Link>
     </h1>

     <button className="bg-[#ac2525] w-[300px] h-[50px] rounded mt-7">
      <input
       className="cursor-pointer w-full text-white text-[30px] uppercase font-Alegreya font-bold"
       type="submit"
       value="sign up"
      />
     </button>

    </form>
   </div>
  </div>
 );
};

export default SignUP;
