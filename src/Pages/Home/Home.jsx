import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
 return (
  <div>
   <div className="navbar "><Navbar/></div> 
   <div><Banner/></div>
  </div>
 );
};

export default Home;