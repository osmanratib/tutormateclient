import { createBrowserRouter } from "react-router-dom";
import MainLay from "../MainLayout/MainLay";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUP from "../Pages/SignUp/SignUP";
import UploadTutor from "../Pages/UploadTutor/UploadTutor";
import Tutors from "../Pages/Tutors/Tutors";
import ConfirmTutors from "../Pages/Confirmutors/ConfirmTutors";
// import TutorsDetal from "../Pages/TutorsDetail/TutorsDetail";
import TutorsDetail from "../Pages/TutorsDetail/TutorsDetail";
import Users from "../Pages/Users/Users";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function Routes() {

 const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLay />,
   children: [
    {
     path: '/',
     element: <Home />
    },
    {
     path: '/signin',
     element: <SignIn />
    },
    {
     path: "/signup",
     element: <SignUP />
    },
    {
     path: '/uploadTutor',
     element: <ProtectedRoute>
      <UploadTutor />
     </ProtectedRoute>
    },
    {
     path: '/tutors',
     element: <ProtectedRoute>
      <Tutors />
     </ProtectedRoute>
    },
    {
     path: '/confirm',
     element: <ProtectedRoute>
      <ConfirmTutors />
     </ProtectedRoute>
    },
    {
     path: '/tutors/:id',
     element: <ProtectedRoute>
      <TutorsDetail />
     </ProtectedRoute>,
     loader: ({ params }) => fetch(`http://localhost:5000/tutors/${params.id}`),
    },
    {
     path: '/users',
     element: <ProtectedRoute>
      <Users />
     </ProtectedRoute>,
     loader: () => fetch('http://localhost:5000/users'),
    }
   ]
  },
 ]);

 return router;

}