import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
            labels:{
                usePointStyle: true,
                pointStyle: 'circle',
                padding:5,
            }
        },
        title: {
          display: true,
          text: 'Category wise Sales (in units)',
        },
    }
}
export const data = {
    
    datasets: [
      {
        label: 'Product wise Sales (in units)',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#a8c8e5',
          '#ecbcbc',
          '#baeeca',
          '#b5cbea',
        ],
        borderWidth: 1,
      },
    ],
    labels: ['Furniture', 'Outdoor', 'Kitchen', ' Stationary'],
  };

export default function PieChart() {
  return (
    <div className='max-h-[70vh] flex items-center justify-center transition-all duration-300'>
      <Doughnut data={data} options={options} />
    </div>
  )
}
