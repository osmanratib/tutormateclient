import { Outlet } from "react-router-dom";

const MainLay = () => {
 return (
  <div className="p-10">
   <Outlet/>
  </div>
 );
};

export default MainLay;