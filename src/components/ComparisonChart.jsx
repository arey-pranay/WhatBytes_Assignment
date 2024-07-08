import { Line } from "react-chartjs-2";

const ComparisonChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Percentile",
        data: [30, 40, 50, 60, 70, 80, 90],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default ComparisonChart;
