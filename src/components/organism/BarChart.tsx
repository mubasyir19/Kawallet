'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: [350, 280, 350, 200, 350, 280, 200],
        backgroundColor: '#62D2FF',
        borderColor: '#62D2FF',
        borderWidth: 1,
        borderRadius: 100,
        barPercentage: 1,
        categoryPercentage: 0.8,
      },
      {
        label: 'Expense',
        data: [200, 100, 280, 100, 200, 100, 100],
        backgroundColor: '#559BED',
        borderColor: '#559BED',
        borderWidth: 1,
        borderRadius: 100,
        barPercentage: 1,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: 'top' as const,
        // align: 'end' as const,
      },
      title: {
        display: false,
      },
      scales: {
        x: {
          stacked: false,
          barPercentage: 1,
          categoryPercentage: 1,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className='p-4 bg-white rounded shadow-md'>
      <Bar data={data} options={options} />
    </div>
  );
}
