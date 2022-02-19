import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";





export default function PieChart() {
  
    const data = {
        labels: ["Tunis", "Ariana", "Mannouba", "Sousse", "Sfax", "Ben Arous"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      };
      var options = {
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let datasets = ctx.chart.data.datasets;
             
              if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                var percentage = Math.round((value / sum) * 100) + "%";
                return percentage;
              } else {
                return percentage;
              }
            },
            color: "red"
          }
        }
      };
    return (
        <div style={{width:500}}>
            <Pie data={data} width={50} height={50} options={options}  />
        </div>
  )
}


