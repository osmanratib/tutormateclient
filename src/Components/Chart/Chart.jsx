import { useEffect, useState } from "react";
import {
 AreaChart,
 Area,
 XAxis,
 YAxis,
 Tooltip,
 Legend,
 ResponsiveContainer,
} from "recharts";

const Chart = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   const tutorsRes = await fetch(
    "https://tutormate-server.vercel.app/tutors"
   );
   const studentsRes = await fetch(
    "https://tutormate-server.vercel.app/students"
   );

   const tutors = await tutorsRes.json();
   const students = await studentsRes.json();

   setData([
    { name: "Start", tutors: 0, students: 0 },
    { name: "Current", tutors: tutors.length, students: students.length },
   ]);
  };

  fetchData();
 }, []);

 return (
  <div className="flex justify-center mt-20 w-full">
   <ResponsiveContainer width="95%" height={300}>
    <AreaChart data={data}>
     <defs>
      <linearGradient id="tutors" x1="0" y1="0" x2="0" y2="1">
       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
       <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="students" x1="0" y1="0" x2="0" y2="1">
       <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
       <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
      </linearGradient>
     </defs>

     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Legend />

     <Area
      type="monotone"
      dataKey="tutors"
      stroke="#8884d8"
      fill="url(#tutors)"
      strokeWidth={2}
     />
     <Area
      type="monotone"
      dataKey="students"
      stroke="#82ca9d"
      fill="url(#students)"
      strokeWidth={2}
     />
    </AreaChart>
   </ResponsiveContainer>
  </div>
 );
};

export default Chart;
