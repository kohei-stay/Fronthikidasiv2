"use client";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // プラグインをインポート

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels); // プラグインを登録

const DoughnutChart = () => {
  const data = {
    labels: ['450pt', '200pt'], // 各データのラベル
    datasets: [
      {
        data: [450, 200], // データの割合
        backgroundColor: ['#e54646', '#e5e5e5'], // 色
        hoverBackgroundColor: ['#c23c3c', '#d4d4d4'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // 凡例を非表示
      },
      tooltip: {
        enabled: false, // ホバー時のツールチップを非表示
      },
      datalabels: {
        display: true, // データラベルを表示
        color: 'black', // ラベルの色
        font: {
          weight: 'bold', // ラベルのフォントを太字にする
          size: '20', // ラベルのフォントサイズを指定
        },
        formatter: (value, context) => {
          return value + 'pt'; // 値に単位を追加
        },
      },
    },
  };

  return <Doughnut data={data} options={options} className="w-32 h-32" />;
};

export default DoughnutChart;
