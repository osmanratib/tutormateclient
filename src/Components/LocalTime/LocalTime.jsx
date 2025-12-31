import React, { useEffect, useState } from "react";

const LocalTime = () => {
 const [time, setTime] = useState(new Date().toLocaleTimeString());

 useEffect(() => {
  const interval = setInterval(() => {
   setTime(new Date().toLocaleTimeString());
  }, 1000);
  return () => clearInterval(interval);
 }, []);

 return (
  <div>
      <h1 className="text-[20px] font-Alegreya font-semibold" >Local {time}</h1>
  </div>
 );
};

export default LocalTime;
