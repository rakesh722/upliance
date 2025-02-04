import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Profile Trends',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h2>User Profile Trends</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
