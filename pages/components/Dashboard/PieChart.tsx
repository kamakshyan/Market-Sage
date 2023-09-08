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
        }
    }
}
export const data = {
    
    datasets: [
      {
        label: 'Product wise Sales',
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
    labels: ['Product 1', 'Product 2', 'Product 3', ' Product 4'],
  };

export default function PieChart() {
  return (
    <div className='max-h-[45vh] flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-slate-200 rounded-lg'>
      <Doughnut data={data} options={options} />
    </div>
  )
}
