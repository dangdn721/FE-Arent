import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const data = {
  labels: [
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
  ],
  datasets: [
    {
      label: 'First dataset',
      data: [20, 19, 14, 17, 15, 13, 14, 12, 11, 9, 7, 5],
      fill: false,
      borderColor: '#FFCC21',
    },
    {
      label: 'Second dataset',
      data: [20, 18, 16, 16, 14, 12.5, 11, 11.5, 10, 8, 6, 4.8],
      fill: false,
      borderColor: '#8FE9D0',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        color: '#777777',
      },
      ticks: {
        beginAtZero: true,
        color: 'white',
        fontSize: 12,
      }
    },
  },
};

const ButtonFilter = ({ text, onClick, active }) => (
  <button
    type='button'
    className={`py-1 px-6 mr-4 rounded-2xl hover:font-bold ${active ? 'bg-[#FFCC21] text-white' : 'bg-white text-[#FFCC21]'
      } `}
    onClick={onClick}
  >
    {text}
  </button>
);

const BodyRecordChart = (props) => {
  const {
    containerClassName = '',
    showTitle = true,
    showFilter = true,
    onChangeType = () => { },
  } = props;
  return (
    <div className={`bg-[#414141] p-6 h-full ${containerClassName}`} >
      {showTitle && (
        <div className='flex text-white'>
          <p className='w-4'>BODY RECORD</p>
          <p className='text-2xl text-light ml-24'>2021.05.21</p>
        </div>
      )}
      <div className='py-1 h-full'>
        <Line width={'100%'} options={options} data={data} />
      </div>
      {showFilter && (
        <div className='flex mt-2'>
          <ButtonFilter text='日' onClick={onChangeType(1)} />
          <ButtonFilter text='週' onClick={onChangeType(2)} />
          <ButtonFilter text='月' onClick={onChangeType(3)} />
          <ButtonFilter active text='年' onClick={onChangeType(4)} />
        </div>
      )}
    </div>
  );
};

export default BodyRecordChart;
