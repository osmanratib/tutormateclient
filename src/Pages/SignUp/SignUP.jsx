import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { sendEmailVerification } from "firebase/auth";

const SignUP = () => {
 const { createUser } = useContext(AuthContext);
 const navigate = useNavigate();
 const [error, setError] = useState("");

 // 🔹 Convert Firebase errors to one-line messages
 const getErrorMessage = (err) => {
  if (err.includes("email-already")) return "Email already registered";
  if (err.includes("weak-password")) return "Password must be at least 6 characters";
  if (err.includes("invalid-email")) return "Invalid email format";
  if (err.includes("popup-closed")) return "Google popup closed";
  return "Something went wrong. Try again.";
 };

 // 🔹 Email/Password Sign Up
 const handleAuth = async (e) => {
  e.preventDefault();
  setError("");

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
   setError("Passwords do not match");
   return;
  }

  try {
   const result = await createUser(email, password);
   await sendEmailVerification(result.user);

   await fetch("https://tutormate-server.vercel.app/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
   });

   Swal.fire({
    icon: "success",
    title: "Verify your email",
    text: "A verification link has been sent to your email",
    timer: 2500,
   });

   form.reset();
   navigate("/signin");
  } catch (err) {
   setError(getErrorMessage(err.message));
  }
 };


 return (
  <div className="min-h-screen flex items-center justify-center px-4">
   <div className="w-full max-w-md border-2 border-red-500 rounded-xl shadow-xl p-6 sm:p-8 text-center">

    <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

    <div className="flex items-center gap-2 my-4">
     <div className="flex-1 h-px bg-white" />
     or
     <div className="flex-1 h-px bg-white" />
    </div>

    {/* Error Message */}
    {error && (
     <p className="text-red-400 text-sm mb-3">{error}</p>
    )}

    {/* Email Form */}
    <form onSubmit={handleAuth} className="space-y-3">

     {["name", "email", "password", "confirmPassword"].map((field, i) => (
      <input
       key={i}
       type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
       name={field}
       placeholder={field.replace(/([A-Z])/g, " $1")}
       required
       className="w-full p-3 rounded bg-white text-black outline-none"
      />
     ))}

     <p className="text-sm">
      Already have an account?
      <Link to="/signin" className="text-blue-300 ml-1">Sign in</Link>
     </p>

     <button
      type="submit"
      className="w-full bg-[#ac2525] py-3 rounded text-white font-bold uppercase"
     >
      Sign Up
     </button>

    </form>
   </div>
  </div>
 );
};

export default SignUP;
