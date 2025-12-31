import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
 return (
  <div className="flex justify-center mt-24 lg:mt-20 w-full">
   <ResponsiveContainer width="95%" height={300}>
    <LineChart
     data={[
      { name: 'Page A', uv: 4000, pv: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398 },
      { name: 'Page C', uv: 2000, pv: 9800 },
      { name: 'Page D', uv: 2780, pv: 3908 },
      { name: 'Page E', uv: 1890, pv: 4800 },
      { name: 'Page F', uv: 2390, pv: 3800 },
      { name: 'Page G', uv: 3490, pv: 4300 },
     ]}
    >
     {/* <CartesianGrid strokeDasharray="3 3" /> */}
     <XAxis className="text-white" dataKey="name" />
     <YAxis />
     <Tooltip />
     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
   </ResponsiveContainer>
  </div>
 );
};

export default Chart;
