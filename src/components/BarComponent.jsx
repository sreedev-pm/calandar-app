import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function BarComponent() {

    const chartData = useSelector((state) => state.calendar.chartData);
  if (!chartData || chartData.length === 0) {
    return <p className="text-center text-gray-500">No data found</p>;
  }

  return (
    <BarChart width={400} height={250} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="user" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

