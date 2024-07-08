// components/ComparisonChart.js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  annotationPlugin
);

const ComparisonChart = () => {
  const data = {
    labels: [0, 25, 50, 75, 100],
    datasets: [
      {
        label: "Percentile Distribution",
        data: [5, 10, 30, 25, 5],
        borderColor: "#844bc0",
        backgroundColor: "rgba(137, 75, 192, 0.2)",
        pointBorderColor: "#a14bc0",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "#ad4bc0",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: 30, // Position the line at 30% percentile
            xMax: 30,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            label: {
              content: "Your Percentile",
              enabled: true,
              position: "top",
              backgroundColor: "rgba(255, 99, 132, 0.8)",
            },
          },
        },
      },
    },
    elements: {
      line: {
        tension: 1,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
    <div className=" mx-auto my-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-medium mb-4">Comparison Graph</h2>
      <div className="flex gap-4 mb-8">
        <div className="text-center mt-0">
          <p className="text-gray-700 text-left">
            You scored <span className="font-semibold">30% percentile</span>{" "}
            which is lower than the average percentile{" "}
            <span className="font-semibold">72%</span> of all the engineers who
            took this assessment.
          </p>
        </div>
        <div className="w-1/4">
          <div className="bg-gray-100 rounded-full h-12 w-12 text-center flex items-center justify-center">
            📈{/* <Image src={HTMLLogo} height={30} width={30} /> */}
          </div>
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonChart;
