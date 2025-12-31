import React from 'react';
import Chart from '../Chart/Chart';

const Banner = () => {
 return (
  <div className=' mt-24 lg:mt-12'>

   <h1 className=' text-[30px] lg:text-[120px] text-center leading-[1] uppercase font-BBH'>welcome <span className='text-[#ac2525]'>Admins</span></h1>
   <div className="chart">
    <Chart />
   </div>

  </div>
 );
};

export default Banner;