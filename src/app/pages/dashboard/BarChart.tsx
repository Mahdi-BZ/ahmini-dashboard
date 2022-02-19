import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Evolutions Des Inscriptions",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          }
        ]
      };
      const options = {
        maintainAspectRatio: false	// Don't maintain w/h ratio
      }
  return (
    <Line
  
      data={data} options={options} 
    /> 
  );
};
export default Chart;