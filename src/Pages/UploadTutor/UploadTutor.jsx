import { IoMdPerson } from "react-icons/io";
import { MdCastForEducation, MdOutlineDesignServices } from "react-icons/md";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import Swal from "sweetalert2";
import Menu from "../../Components/Menu/Menu";

const UploadTutor = () => {

 const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const file = form.file.files[0];

  if (!file) {
   Swal.fire({
    title: 'Error',
    text: 'Please select an image file',
    icon: 'error',
   });
   return;
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', form.name.value);
  formData.append('dept', form.dept.value);
  formData.append('university', form.university.value);
  formData.append('college', form.college.value);
  formData.append('exp', form.exp.value);
  formData.append('phone', form.phone.value);

  try {
   const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to submit this form?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, submit',
   });

   if (result.isConfirmed) {
    const response = await fetch('https://tutormateadminserver.vercel.app/tutors', {
     method: 'POST',
     body: formData,
    });

    const data = await response.json();
    if (data.acknowledged) {
     form.reset();
     Swal.fire({
      title: 'Submitted!',
      icon: 'success',
     });
    } else {
     Swal.fire({
      title: 'Failed!',
      text: data.error || 'Something went wrong',
      icon: 'error',
     });
    }
   }
  } catch (err) {
   console.error(err);
   Swal.fire({
    title: 'Error',
    text: 'Failed to upload image',
    icon: 'error',
   });
  }
 };


 return (
  <div className="px-4 sm:px-8 lg:px-16 py-6">
   <div className="flex justify-center mb-6">
    <Menu />
   </div>
   <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-BBH mb-12">
    Upload Details
   </h1>

   <form
    encType="multipart/form-data"
    onSubmit={handleSubmit}
    className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-start"
   >
    {/* Input Fields */}
    {[
     { label: "Upload Image", name: "file", type: "file", icon: null, placeholder: "" },
     { label: "Name of the Tutor", name: "name", type: "text", icon: <IoMdPerson />, placeholder: "Name" },
     { label: "Name of the Department", name: "dept", type: "text", icon: <MdCastForEducation />, placeholder: "CSE" },
     { label: "Name of the University", name: "university", type: "text", icon: <PiGraduationCapDuotone />, placeholder: "NUET" },
     { label: "Name of the College", name: "college", type: "text", icon: <FaSchoolCircleCheck />, placeholder: "Bangla College" },
     { label: "Experience", name: "exp", type: "text", icon: <MdOutlineDesignServices />, placeholder: "2 years" },
     { label: "Phone Number", name: "phone", type: "text", icon: <IoIosPhonePortrait />, placeholder: "+880" },
    ].map((field, idx) => (
     <div key={idx}>
      <h1 className="text-white font-Alegreya font-bold text-[16px] flex items-center gap-3 mb-2">
       {field.icon && <span>{field.icon}</span>}
       {field.label}
      </h1>
      <div className="bg-white w-full sm:max-w-[300px] h-[50px] rounded-xl p-2">
       <input
        className="w-full h-full bg-white outline-none text-black"
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        required={field.name !== "college"}
       />
      </div>
     </div>
    ))}

    {/* Submit Button */}
    <div className="sm:col-span-2 flex justify-center">
     <button className="bg-[#ac2525] w-full sm:w-[400px] h-[50px] rounded">
      <input
       className="cursor-pointer w-full text-white text-xl sm:text-2xl uppercase font-Alegreya font-bold"
       type="submit"
       value="submit"
      />
     </button>
    </div>
   </form>
  </div>
 );
};

export default UploadTutor;
