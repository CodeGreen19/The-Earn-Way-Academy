import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "This Chart is showing how many courses are sold",
    },
  },
};

const labels = [
  "Quran",
  "Hsc English",
  "Word",
  "Excel",
  "Powerpoint",
  "Spoken English",
  "Typing",
  "Typing",
];

export const data = {
  labels,
  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: [1, 2, 3, 4, 5, 6, 7],
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "Sold Courses",
      data: [4, 7, 11, 7, 16, 4, 8, 3],
      backgroundColor: "rgba(53, 162, 235, 0.8)",
    },
  ],
};

function BarChart() {
  return (
    <div className="m-auto my-5 w-full lg:w-[90%]">
      <Bar options={options} data={data} />;
    </div>
  );
}
export default BarChart;
